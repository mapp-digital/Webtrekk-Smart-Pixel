import React from 'react';
import { shallow, mount } from './../../enzyme';
import { expectInCallback } from './../../helper';
import { WebtrekkProductList, WebtrekkSmartPixelReact } from './../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkProductList', () => {
    let renderedWebtrekkProductList;
    let spyOnError;
    let spyOnAddProductListElement;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
            renderedWebtrekkProductList = shallow(
                <WebtrekkProductList>
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkProductList>,
                {
                    wrappingComponent: WebtrekkProductList
                }
            );
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
            spyOnAddProductListElement = null;
            renderedWebtrekkProductList = null;
        });

        test('default props', () => {
            const props = renderedWebtrekkProductList.getWrappingComponent().props().children.props;
            expect(props.selector).toBe(null);
            expect(props.id).toBe(null);
            expect(props.position).toBe(null);
            expect(props.cost).toBe(null);
            expect(props.quantity).toBe(null);
            expect(props.variant).toBe(null);
            expect(props.soldOut).toBe(null);
            expect(props.category).toBe(null);
            expect(props.parameter).toBe(null);
        });

        test('define props', () => {
            renderedWebtrekkProductList = shallow(
                <WebtrekkProductList
                    selector='selector'
                    id='id'
                    position={ 0 }
                    cost={ 0 }
                    quantity={ 0 }
                    variant='variant'
                    soldOut={ false }
                    category={ {1: 'category-1'} }
                    parameter={ {1: 'parameter-1'} }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkProductList>,
                {
                    wrappingComponent: WebtrekkProductList
                }
            );

            const props = renderedWebtrekkProductList.getWrappingComponent().props().children.props;
            expect(props.selector).toBe('selector');
            expect(props.id).toBe('id');
            expect(props.position).toBe(0);
            expect(props.cost).toBe(0);
            expect(props.quantity).toBe(0);
            expect(props.variant).toBe('variant');
            expect(props.soldOut).toBe(false);
            expect(props.category).toEqual({1: 'category-1'});
            expect(props.parameter).toEqual({1: 'parameter-1'});
        });

        test('ignore wrong type', () => {
            renderedWebtrekkProductList = shallow(
                <WebtrekkProductList
                    id={0}
                    position={{}}
                    cost={{}}
                    quantity={{}}
                    variant={0}
                    soldOut="false"
                    category={['category-1']}
                    parameter={['parameter-1']}
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkProductList>,
                {
                    wrappingComponent: WebtrekkProductList
                }
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(8);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `id` of type `number` supplied to `WebtrekkProductList`, expected `string`');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `position` supplied to `WebtrekkProductList`');
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain('Invalid prop `cost` supplied to `WebtrekkProductList`');
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain('Invalid prop `quantity` supplied to `WebtrekkProductList`');
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain('Invalid prop `variant` of type `number` supplied to `WebtrekkProductList`, expected `string`');
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain('Invalid prop `soldOut` of type `string` supplied to `WebtrekkProductList`, expected `boolean`');
            expect(spyOnError.mock.calls[6][invalidPropIndex]).toContain('Invalid prop `category` of type `array` supplied to `WebtrekkProductList`, expected an object');
            expect(spyOnError.mock.calls[7][invalidPropIndex]).toContain('Invalid prop `parameter` of type `array` supplied to `WebtrekkProductList`, expected an object');
        });

        test('create an element', () => {
            expect(renderedWebtrekkProductList.type()).toBe('div');
        });

        test('check element via snapshot', () => {
            expect(renderedWebtrekkProductList.debug()).toMatchSnapshot();
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
                spyOnAddProductListElement = jest.spyOn(wtSmart.extension.product_list_tracking, 'add').mockImplementation(() => {});

                renderedWebtrekkProductList = mount(
                    <WebtrekkProductList>
                        <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                    </WebtrekkProductList>,
                    {
                        wrappingComponent: WebtrekkProductList
                    }
                );

                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.extension.product_list_tracking.deactivate();

                spyOnError.mockRestore();
                spyOnAddProductListElement.mockRestore();

                spyOnError = null;
                spyOnAddProductListElement = null;
                renderedWebtrekkProductList = null;

                done();
            });
        });

        test('is added', (done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddProductListElement.mock.calls.length).toBe(2);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                }, done);
            });
        });

        test('is updated', (done) => {
            renderedWebtrekkProductList.setProps();
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddProductListElement.mock.calls.length).toBe(4);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                }, done);
            });
        });

        test('add element with default config', (done) => {
            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddProductListElement.mock.calls[0][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.data.id).toBe(null);
                    expect(data.data.position).toBe(null);
                    expect(data.data.cost).toBe(null);
                    expect(data.data.quantity).toBe(null);
                    expect(data.data.variant).toBe(null);
                    expect(data.data.soldOut).toBe(null);
                    expect(data.data.category).toBe(null);
                    expect(data.data.parameter).toBe(null);
                }, done);
            });
        });

        test('add element with config - 1', (done) => {
            renderedWebtrekkProductList = mount(
                <WebtrekkProductList
                    id='product id 1'
                    position={ 2 }
                    cost={ 19.95 }
                    quantity={ 1 }
                    variant='product variant'
                    soldOut={ false }
                    category={ {1: 'category-1', 5: 'category-5'} }
                    parameter={ {1: 'parameter-1', 7: 'parameter-7'} }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkProductList>,
                {
                    wrappingComponent: WebtrekkProductList
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddProductListElement.mock.calls[2][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.data.id).toBe('product id 1');
                    expect(data.data.position).toBe(2);
                    expect(data.data.cost).toBe(19.95);
                    expect(data.data.quantity).toBe(1);
                    expect(data.data.variant).toBe('product variant');
                    expect(data.data.soldOut).toBe(false);
                    expect(data.data.category).toEqual({1: 'category-1', 5: 'category-5'});
                    expect(data.data.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
                }, done);
            });
        });

        test('add element with config - 2', (done) => {
            renderedWebtrekkProductList = mount(
                <WebtrekkProductList
                    selector='#ce1'
                    id='product id 2'
                    position={ 3 }
                    cost={ 89.95 }
                    quantity={ 5 }
                    variant='product variant'
                    soldOut={ false }
                    category={ {2: 'category-2', 9: 'category-9'} }
                    parameter={ {1: 'parameter-1', 6: 'parameter-6'} }
                >
                    <div id='ce1' style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkProductList>,
                {
                    wrappingComponent: WebtrekkProductList
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddProductListElement.mock.calls[2][0];
                    expect(data.selector).toBe('#ce1');
                    expect(data.data.id).toBe('product id 2');
                    expect(data.data.position).toBe(3);
                    expect(data.data.cost).toBe(89.95);
                    expect(data.data.quantity).toBe(5);
                    expect(data.data.variant).toBe('product variant');
                    expect(data.data.soldOut).toBe(false);
                    expect(data.data.category).toEqual({2: 'category-2', 9: 'category-9'});
                    expect(data.data.parameter).toEqual({1: 'parameter-1', 6: 'parameter-6'});
                }, done);
            });
        });
    });
});
