<template>
    <div>
        <p v-webtrekk.teaser_tracking="{
          data: {
            name: 'New Women Collection',
            rank: 'Main Page Banner',
            content: 'Women Collection',
            variant: 'campaign'
          },
          conversion: {
             type: 'product',
             goal: 'both',
             value: '11%'
          }    
      }"
           ref="teaser_element">
            Test Teaser Element
        </p>
        <ul>
            <li v-webtrekk.product_list_tracking="{
         data: {
            id: '075eo2f002',
            position: 1,
            cost: 49.99,
            quantity: 5,
            category: {
                1: '100% cotton',
            },
            parameter: {
                1: 'blue'
            },
            variant: 'button-down design',
            soldOut: false
        }
      }"
                ref="product_element">Product 1
            </li>
        </ul>
        <p v-webtrekk.content_engagement="{
      name: 'name of the element',
        config: {
            percentageStepsInAnalytics: 20,
            sendContentEngagement: 2,
            percentageReached: 33,
            secondsReached: 22,
            largeBrowserResolution: 1234,
            largeBrowserSeconds: 23,
            mediumBrowserResolution: 123,
            mediumBrowserSeconds: 12,
            smallBrowserResolution: 12,
            smallBrowserSeconds: 2
        }
    }"
           ref="content_element">
            Some content
        </p>
    </div>
</template>

<script>
    export default {
        name: 'extension-directive'
    };
</script>