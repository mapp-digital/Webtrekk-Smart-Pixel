import React from 'react';
import { shallow, mount } from './../../enzyme';
import { expectInCallback } from './../../helper';
import { WebtrekkTeaser, WebtrekkSmartPixelReact } from './../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkTeaser', () => {
    let renderedWebtrekkTeaser;
    let spyOnError;
    let spyOnAddTeaserElement;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
            renderedWebtrekkTeaser = shallow(
                <WebtrekkTeaser>
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkTeaser>,
                {
                    wrappingComponent: WebtrekkTeaser
                }
            );
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
            spyOnAddTeaserElement = null;
            renderedWebtrekkTeaser = null;
        });

        test('default props', () => {
            const props = renderedWebtrekkTeaser.getWrappingComponent().props().children.props;
            expect(props.selector).toBe(null);
            expect(props.name).toBe(null);
            expect(props.rank).toBe(null);
            expect(props.content).toBe(null);
            expect(props.variant).toBe(null);
            expect(props.seen).toBe(null);
            expect(props.type).toBe(null);
            expect(props.goal).toBe(null);
            expect(props.value).toBe(null);
        });

        test('define props', () => {
            renderedWebtrekkTeaser = shallow(
                <WebtrekkTeaser
                    selector='selector'
                    name='name'
                    rank='rank'
                    content='content'
                    variant='variant'
                    seen={ false }
                    type='product'
                    goal='both'
                    value='value'
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkTeaser>,
                {
                    wrappingComponent: WebtrekkTeaser
                }
            );

            const props = renderedWebtrekkTeaser.getWrappingComponent().props().children.props;
            expect(props.selector).toBe('selector');
            expect(props.name).toBe('name');
            expect(props.rank).toBe('rank');
            expect(props.content).toBe('content');
            expect(props.variant).toBe('variant');
            expect(props.seen).toBe(false);
            expect(props.type).toBe('product');
            expect(props.goal).toBe('both');
            expect(props.value).toBe('value');
        });

        test('ignore wrong type', () => {
            renderedWebtrekkTeaser = shallow(
                <WebtrekkTeaser
                    selector={ 0 }
                    name={ 0 }
                    rank={ 0 }
                    content={ 0 }
                    variant={ 0 }
                    seen='false'
                    type='type'
                    goal='true'
                    value={ 0 }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkTeaser>,
                {
                    wrappingComponent: WebtrekkTeaser
                }
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(9);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `selector` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `name` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain('Invalid prop `rank` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain('Invalid prop `content` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain('Invalid prop `variant` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain('Invalid prop `seen` of type `string` supplied to `WebtrekkTeaser`, expected `boolean`');
            expect(spyOnError.mock.calls[6][invalidPropIndex]).toContain('Invalid prop `type` of value `type` supplied to `WebtrekkTeaser`, expected one of ["view","click","product"]');
            expect(spyOnError.mock.calls[7][invalidPropIndex]).toContain('Invalid prop `goal` of value `true` supplied to `WebtrekkTeaser`, expected one of ["order","goal","both"]');
            expect(spyOnError.mock.calls[8][invalidPropIndex]).toContain('Invalid prop `value` of type `number` supplied to `WebtrekkTeaser`, expected `string`');
        });

        test('create an element', () => {
            expect(renderedWebtrekkTeaser.type()).toBe('div');
        });

        test('check element via snapshot', () => {
            expect(renderedWebtrekkTeaser.debug()).toMatchSnapshot();
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
                spyOnAddTeaserElement = jest.spyOn(wtSmart.extension.teaser_tracking, 'add').mockImplementation(() => {});

                renderedWebtrekkTeaser = mount(
                    <WebtrekkTeaser>
                        <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                    </WebtrekkTeaser>,
                    {
                        wrappingComponent: WebtrekkTeaser
                    }
                );

                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.extension.teaser_tracking.deactivate();

                spyOnError.mockRestore();
                spyOnAddTeaserElement.mockRestore();

                spyOnError = null;
                spyOnAddTeaserElement = null;
                renderedWebtrekkTeaser = null;

                done();
            });
        });

        test('is added', (done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddTeaserElement.mock.calls.length).toBe(2);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                }, done);
            });
        });

        test('is updated', (done) => {
            renderedWebtrekkTeaser.setProps();
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddTeaserElement.mock.calls.length).toBe(4);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                }, done);
            });
        });

        test('add element with default config', (done) => {
            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddTeaserElement.mock.calls[0][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.data.name).toBe(null);
                    expect(data.data.rank).toBe(null);
                    expect(data.data.content).toBe(null);
                    expect(data.data.variant).toBe(null);
                    expect(data.data.seen).toBe(null);
                    expect(data.conversion.type).toBe(null);
                    expect(data.conversion.goal).toBe(null);
                    expect(data.conversion.value).toBe(null);
                }, done);
            });
        });

        test('add element with config - 1', (done) => {
            renderedWebtrekkTeaser = mount(
                <WebtrekkTeaser
                    name='name of the teaser element'
                    rank='rank of the teaser element'
                    content='content of the teaser element'
                    variant='variant of the teaser element'
                    seen={ false }
                    type='view'
                    goal='both'
                    value='%'
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkTeaser>,
                {
                    wrappingComponent: WebtrekkTeaser
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddTeaserElement.mock.calls[2][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.data.name).toBe('name of the teaser element');
                    expect(data.data.rank).toBe('rank of the teaser element');
                    expect(data.data.content).toBe('content of the teaser element');
                    expect(data.data.variant).toBe('variant of the teaser element');
                    expect(data.data.seen).toBe(false);
                    expect(data.conversion.type).toBe('view');
                    expect(data.conversion.goal).toBe('both');
                    expect(data.conversion.value).toBe('%');
                }, done);
            });
        });

        test('add element with config - 2', (done) => {
            renderedWebtrekkTeaser = mount(
                <WebtrekkTeaser
                    selector='#ce1'
                    name='name of the teaser element'
                    rank='rank of the teaser element'
                    content='content of the teaser element'
                    variant='variant of the teaser element'
                    seen={ false }
                    type='view'
                    goal='both'
                    value='%'
                >
                    <div id='ce1' style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkTeaser>,
                {
                    wrappingComponent: WebtrekkTeaser
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddTeaserElement.mock.calls[2][0];
                    expect(data.selector).toBe('#ce1');
                    expect(data.data.name).toBe('name of the teaser element');
                    expect(data.data.rank).toBe('rank of the teaser element');
                    expect(data.data.content).toBe('content of the teaser element');
                    expect(data.data.variant).toBe('variant of the teaser element');
                    expect(data.data.seen).toBe(false);
                    expect(data.conversion.type).toBe('view');
                    expect(data.conversion.goal).toBe('both');
                    expect(data.conversion.value).toBe('%');
                }, done);
            });
        });
    });
});
