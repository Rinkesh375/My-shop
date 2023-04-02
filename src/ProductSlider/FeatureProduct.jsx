const featureProduct = [
    {
        name: "Lakme Sun Expert Ultra Matte SPF 40 PA+++ Compact (7 g)",
        discountprice: "285",
        actualPrice: 350,
        url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/307565/maybelline-new-york-lash-sensational-sky-high-waterproof-mascara-lengthening-and-volumizing-mascara-with-bamboo-exract-and-fibres-very-black-6-ml_1_display_1678336663_76640fad.jpg"
    },

    {
        name: "Purplle Natural Tress - Free Wooden Comb - Big | Organic Neem Wood",
        discountprice: "150",
        actualPrice: "199",
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/269996/purplle-natural-tress-free-wooden-comb-big_6_display_1662361862_7161282f.jpg`
    },
    {
        name: "Stay Quirky I'm done with you Nail Polish Remover Pads| Nail Lacquer Remover - 30 Pads (43 g)",
        discountprice: 77,
        actualPrice: 110,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/202529/stay-quirky-i-m-done-with-you-nail-polish-remover-pads-43-g_6_display_1647235352_00253240.jpg`
    },
    {
        name: "TRESemme Keratin Smooth Shampoo (580 ml)",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/256995/tresemme-keratin-smooth-shampoo-1-ltr_3_display_1563251864_5934c3dc.jpg`
    },
    {
        name: "TRESemme Keratin Smooth Shampoo (580 ml)",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344340/l-oreal-professionnel-x-tenso-care-straight-masque-200-ml-promo-18-92-62_2_display_1677736932_9c3637ec.jpg`
    },
    {
        name: "TRESemme Keratin Smooth Shampoo (580 ml)",
        discountprice: "800",
        actualPrice: 900,
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/197370/lakme-sun-expert-ultra-matte-spf-40-pa-compact-7-g_3_display_1556887770_f561c73c.jpg`
    },
    {
        name: "Bajaj Almond Drops Hair Oil (650 ml)",
        discountprice: "385",
        actualPrice: "435",
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300436/bajaj-almond-drops-hair-oil-650-ml_1_display_1607938934_994b0052.jpg`
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/278695/purplle-dragon-fruit-tropical-kiss-body-yogurt-200gm_8_display_1660111337_34b0a14a.jpg`,
        name: "Purplle Dragon Fruit Tropical Kiss Body Yogurt | Body Moisturizer (200gm)",
        actualPrice: "799",
        discountprice: "680"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/290457/stay-quirky-primer-setting-spray-natural-50ml_10_display_1660305178_e2ac5a41.jpg`,
        name: "Stay Quirky Primer + Setting Spray (Natural) 50 ml",
        actualPrice: "399",
        discountprice: "280"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344343/l-or-al-professionnel-x-tenso-care-straight-serum-50-ml-78-59-92_1_display_1677736936_4aaae15b.jpg`,
        name: "L'Oreal Professionnel Xtenso Care Serum| Hair Serum for Salon Straightened hair | Nourishes and adds shine| With Pro-Keratin and Incell (50ml)",
        actualPrice: "780",
        discountprice: 680
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/328775/bajaj-coconut-bajaj-coconut-oil-600ml_1_display_1669523936_13e2a010.jpg`,
        name: "Bajaj Coconut Oil 600ml",
        discountprice: "187",
        actualPrice: "249"
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/220344/purplle-true-jewel-24k-gold-primer-20-ml-52_1_display_1673004163_b24333a5.jpg`,
        name: "Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml)",
        discountprice: "333",
        actualPrice: 475
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344328/l-oreal-professionnel-absolut-repair-lipidium-shampoo-300-ml-11-35-20-11-10-61_1_display_1677737005_8915b381.jpg`,
        name: "L'Oreal Professionnel Serie Expert Absolut Repair Shampoo|Provides deep conditioning & strength|With Gold Quinoa & Wheat Protein (300ml)",
        discountprice: "748",
        actualPrice: 900
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/290457/stay-quirky-primer-setting-spray-natural-50ml_10_display_1660305178_e2ac5a41.jpg`,
        name: "Stay Quirky Primer + Setting Spray (Natural) 50 ml",
        discountprice: 280,
        actualPrice: 399
    },
    {
        url: `https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344341/l-oreal-professionnel-x-tenso-care-masque-sulfate-free-196gm-74_2_display_1677737024_f98469c3.jpg`,
        name: "L'Oreal Professionnel Xtenso Care Sulfate-free Mask|Hair Mask for all hair types|Gently cleanses, controls frizz|With Keratin Repair (196gms)",
        discountprice: "1150",
        actualPrice: 1500
    },
]

export default featureProduct
