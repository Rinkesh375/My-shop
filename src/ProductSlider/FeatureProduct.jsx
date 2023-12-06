const featureProduct = [
    {
        name: " Alps Goodness Fenugreek, Biotin and Redensyl Anti Hairfall Hair...",
        discountprice: "285",
        actualPrice: 350,
        url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/259394/alps-goodness-fenugreek-biotin-and-redensyl-anti-hairfall-conditioner-200-ml_16_display_1684904329_f5036e63.jpg"
    },

    {
        name: "Mamaearth Rosemary Hair Growth Oil with Rosemary  Hair Growth - 150 ml...",
        discountprice: "150",
        actualPrice: 199,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/356015/mamaearth-rosemary-hair-growth-oil-with-rosemary-and-methi-dana-for-promoting-hair-growth-150-ml_1_display_1686745148_57864ef1.jpg`
    },
    {
        name: "Streax cream Hair colour, 100% Grey Coverage Golden Blonde, 120 ml... ",
        discountprice: 77,
        actualPrice: 110,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/324530/streax-hair-colour-golden-blonde-120-ml_5_display_1650363241_dd714208.jpg`
    },
    {
        name: "Intense Moisture Hair Mask with Jojoba Oil  & Shiny Hair - 250 g...",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/353602/intense-moisture-hair-mask-with-jojoba-oil-and-vitamin-e-for-nourished-and-shiny-hair-250-g_1_display_1684133253_3e0ce5ed.jpg`
    },
    {
        name: "Indus Valley Bio Organic Almond Oil ((100 ml))... ",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/215980/indus-valley-bio-organic-almond-oil-100-ml_3_display_1683018485_c57ac14f.jpg`
    },
    {
        name: "NY Bae Banana Loose Powder (5.8 g) | Yellow | Matte Finish...",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/344786/ny-bae-banana-loose-powder-5-8-ml-18-15_1_display_1692244258_6e9dbec7.jpg`
    },
    {
        name: "Alps Goodness Coconut, Argan Oil & Hyaluronic Acid Hydrating...",
        discountprice: "385",
        actualPrice: "435",
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/259395/alps-goodness-coconut-argan-oil-and-hyaluronic-acid-hydrating-and-moisturizing-conditioner-for-dry-hair-200-ml_15_display_1667380679_c0a62b5e.jpg`
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/356016/mamaearth-rosemary-anti-hair-fall-shampoo-with-rosemary-and-methi-dana-for-reducing-hair-loss-and-breakage-250-ml_1_display_1686745111_5271bf90.jpg`,
        name: " Mamaearth Rosemary Anti-Hair Fall Shampoo with Rosemary & Methi Dana  Breakage - 250 ml... ",
        actualPrice: "799",
        discountprice: "680"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/342768/indus-valley-bio-organic-coconut-oil-175-ml-15_2_display_1683018058_69619d49.jpg`,
        name: " Indus Valley Bio Organic Coconut oil (175 ml)...",
        actualPrice: "399",
        discountprice: "280"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/345507/alps-goodness-100-percentage-pure-cold-pressed-castor-oil-100-ml_1_display_1689667512_81d00e12.jpg`,
        name: "Alps Goodness 100% Pure Cold Pressed Castor Oil (100 ml) | For Hair & Skin | 100% Natural Arandee oil...",
        actualPrice: "780",
        discountprice: 680
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/199064/mamaearth-mamaearth-s-onion-hair-oil-for-hair-regrowth-and-hair-fall-control-250-ml_9_display_1653285647_b771a842.jpg`,
        name: "Mamaearth Mamaearth’s Onion Hair Oil for Hair Regrowth & Hair Fall Control (250 ml)... ",
        discountprice: "187",
        actualPrice: "249"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/273993/streax-ultralights-highlighting-kit-vibrant-blonde-40-ml-64_2_display_1650347687_010b875a.jpg`,
        name: "Streax Ultralights Highlight Hair Colour Kit, Semi Permanent Hair colour for women and men, Vibrant Blonde, 40 ml...",
        discountprice: "333",
        actualPrice: 475
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/345508/alps-goodness-100-percentage-pure-cold-pressed-coconut-oil-100-ml_1_display_1689836381_59406ce1.jpg`,
        name: "Alps Goodness 100% Natural Cold Pressed Coconut Oil (100 ml) | 100% Pure & Organic...",
        discountprice: "748",
        actualPrice: 900
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/274447/streax-ultralights-gem-collection-blue-sapphire-60-ml-14_2_display_1650347311_0dde9ffc.jpg`,
        name: "Streax Ultralights Highlight Hair Colour Kit, Semi Permanent Hair colour for women and men Gel...",
        discountprice: 280,
        actualPrice: 399
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/269683/streax-insta-shampoo-hair-colour-natural-black-18-ml_1_display_1639723628_4d44eaf6.jpg`,
        name: "Streax Insta Shampoo Hair Colour - Natural Black (18 ml)...",
        discountprice: "1150",
        actualPrice: 1500
    },
]

export default featureProduct
