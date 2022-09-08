const colors = {
    // Error
    error: 'rgba(246, 86, 93, 1)',
    error80: 'rgba(246, 86, 93, 0.8)',
    error60: 'rgba(246, 86, 93, 0.6)',
    error20: 'rgba(246, 86, 93, 0.2)',
    error08: 'rgba(246, 86, 93, 0.08)',

    // Primary
    primary: 'rgba(78, 85, 175, 1)',
    primary80: 'rgba(78, 85, 175, 0.8)',
    primary60: 'rgba(78, 85, 175, 0.6)',
    primary20: 'rgba(78, 85, 175, 0.2)',
    primary08: 'rgba(78, 85, 175, 0.08)',

    // Secondary
    secondary: 'rgba(161, 219, 245, 1)',
    secondary80: 'rgba(161, 219, 245, 0.8)',
    secondary60: 'rgba(161, 219, 245, 0.6)',
    secondary20: 'rgba(161, 219, 245, 0.2)',
    secondary08: 'rgba(161, 219, 245, 0.08)',

    // Success
    success: 'rgba(253, 212, 70, 1)',
    success80: 'rgba(253, 212, 70, 0.8)',
    success60: 'rgba(253, 212, 70, 0.6)',
    success20: 'rgba(253, 212, 70, 0.2)',
    success08: 'rgba(253, 212, 70, 0.08)',

    // Dark
    dark: 'rgba(13, 15, 35, 1)',
    dark80: 'rgba(13, 15, 35, 0.8)',
    dark60: 'rgba(13, 15, 35, 0.6)',
    dark20: 'rgba(13, 15, 35, 0.2)',
    dark08: 'rgba(13, 15, 35, 0.08)',

    // Grey
    grey: 'rgba(160, 161, 180, 1)',
    grey80: 'rgba(160, 161, 180, 0.8)',
    grey60: 'rgba(160, 161, 180, 0.6)',
    grey20: 'rgba(160, 161, 180, 0.2)',
    grey08: 'rgba(160, 161, 180, 0.08)',

    // Light Grey
    lightGrey: 'rgba(247, 247, 247, 1)',
    lightGrey80: 'rgba(247, 247, 247, 0.8)',
    lightGrey60: 'rgba(247, 247, 247, 0.6)',
    lightGrey20: 'rgba(247, 247, 247, 0.2)',
    lightGrey08: 'rgba(247, 247, 247, 0.08)',

    // Light
    light: 'rgba(255, 255, 255, 1)',
    light80: 'rgba(255, 255, 255, 0.8)',
    light60: 'rgba(255, 255, 255, 0.6)',
    light20: 'rgba(255, 255, 255, 0.2)',
    light08: 'rgba(255, 255, 255, 0.08)',

    // Support 1
    support1: 'rgba(110, 162, 255, 1)',
    support1_08: 'rgba(110, 162, 255, 0.08)',

    // Support 2
    support2: 'rgba(249, 161, 218, 1)',
    support2_08: 'rgba(249, 161, 218, 0.08)',

    // Support 3
    support3: 'rgba(0, 210, 224, 1)',
    support3_08: 'rgba(0, 210, 224, 0.08)',

    // Support 4
    support4: 'rgba(255, 132, 13, 1)',
    support4_08: 'rgba(255, 132, 13, 0.08)',

    // Support 5
    support5: 'rgba(123, 96, 238, 1)',
    support5_08: 'rgba(123, 96, 238, 0.08)',

    // Shadow
    shadow: 'rgba(138, 149, 158, 1)',
    shadow08: 'rgba(138, 149, 158, 0.08)',
}

const banners = [
    {
        id: 1,
        title: 'Same Price of $100',
        description: 'Shoe in Miniacs Shop',
        date: 'Dec 24',
        image: require('../assets/images/banner-01.png'),
    },
    {
        id: 2,
        title: 'FlASH SALE Haloween',
        description: 'Stay tune and check your notif everyday',
        date: '6 hours',
        image: require('../assets/images/banner-02.png'),
    }
]

const flashDeals = [
    {
        id: 1,
        title: "Flash Deals",
        desc: "Sale time from 1:00pm - 3:00pm"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_02.png'),
        sold_qty: "546",
        total_qty: "5k",
        percentage: "11%"
    }
]

const promoItems = [
    {
        id: 1,
        title: "Promo Product",
        desc: "Products are priced from 40%"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_03.png'),
        name: "Wireless Controller PS4™",
        price: 278.00,
        discount: "-54%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_04.png'),
        name: "T-shirt Men Uniquilo",
        price: 378.00,
        discount: "-60%"
    }
]

const categories = [
    {
        id: 1,
        name: "Bed",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bed_01.png'),
        image_2: require('../assets/images/dummy/bed_02.png'),
        image_3: require('../assets/images/dummy/bed_03.png'),
        bg_color: colors.primary20
    },
    {
        id: 2,
        name: "Bathtub",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bathtub_01.png'),
        image_2: require('../assets/images/dummy/bathtub_02.png'),
        image_3: require('../assets/images/dummy/bathtub_03.png'),
        bg_color: colors.error20
    },
    {
        id: 2,
        name: "Chair",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/chair_01.png'),
        image_2: require('../assets/images/dummy/chair_02.png'),
        image_3: require('../assets/images/dummy/chair_03.png'),
        bg_color: colors.success20
    },
    {
        id: 3,
        name: "Wardrobe",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/wardrobe_01.png'),
        image_2: require('../assets/images/dummy/wardrobe_02.png'),
        image_3: require('../assets/images/dummy/wardrobe_03.png'),
        bg_color: colors.secondary20
    }
]

const quickALinks = [
    {
        id: 1,
        title: 'Event',
        icon: require('../assets/icons/book.png'),
        color: '#FFFFFF',
    },
    {
        id: 2,
        title: 'Transport',
        icon: require('../assets/icons/car.png'),
        color: '#6DA2FD',
    },
    {
        id: 3,
        title: 'Live',
        icon: require('../assets/icons/video.png'),
        color: '#F9A1D8',
    },
    {
        id: 4,
        title: 'Coin',
        icon: require('../assets/icons/shopping_bag.png'),
        color: '#00D2DF',
    },
    {
        id: 5,
        title: 'Flash Sale',
        icon: require('../assets/icons/clock.png'),
        color: '#F7565D',
    },
    {
        id: 6,
        title: 'Search',
        icon: require('../assets/icons/search.png'),
        color: '#FDD452',
    },
    {
        id: 7,
        title: 'Premium',
        icon: require('../assets/icons/fire.png'),
        color: '#FF841E',
    },
    {
        id: 8,
        title: 'Card',
        icon: require('../assets/icons/credit_card.png'),
        color: '#7B60EA',
    }

]

const services = [
    {
        id: 1,
        title: 'Fast shopping',
        description: 'Fast home delivery within 2h free shipping',
        price: 'Only 50$/Month',
        image: require('../assets/images/get_card.png')
    },
    {
        id: 2,
        title: 'Fresh food',
        description: 'You just need the menu we will suggest, choose buy for you',
        price: 'Only 20$/Month',
        image: require('../assets/images/buy_coffee.png')
    },
    {
        id: 3,
        title: 'Exchange old things',
        description: 'You can exchange used items',
        price: 'Only 10$/Month',
        image: require('../assets/images/get_money.png')
    },
    {
        id: 4,
        title: 'Give gifts friend',
        description: 'Help you to send gifts to your loved ones',
        price: 'Only 5$/Month',
        image: require('../assets/images/get_reward.png')
    }
]

const chartData = [
    {
        x: 'Mon',
        y: 62136.52
    },
    {
        x: 'Tue',
        y: 42410.65
    },
    {
        x: 'Wed',
        y: 50794.10
    },
    {
        x: 'Thur',
        y: 75452.00
    },
    {
        x: 'Fri',
        y: 62136.60
    },
    {
        x: 'Sat',
        y: 42410.00
    },
    {
        x: 'Sun',
        y: 26136.50
    }
]

const orders = [
    {
        id: 1,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$570.00'
    },
    {
        id: 2,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$208.00'
    },
    {
        id: 3,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$600.00'
    }
]

const flashSales = [
    {
        id: 1,
        time: "08:00",
        status: "Done Flash"
    },
    {
        id: 2,
        time: "12:00",
        status: "Ongoing"
    },
    {
        id: 3,
        time: "16:00",
        status: "Next Flash"
    },
    {
        id: 4,
        time: "20:00",
        status: "Next Flash"
    }
]

const brands = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Nikon",
        logo: require('../assets/images/dummy/logo_01.png')
    },
    {
        id: 3,
        name: "Sony",
        logo: require('../assets/images/dummy/logo_02.png')
    },
    {
        id: 4,
        name: "Fujifilm",
        logo: require('../assets/images/dummy/logo_03.png')
    }
]

const flashSaleItems = [
    {
        id: 1,
        name: 'Fujifilm Instax Mini 9',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 2,
        name: 'Nikon Coolpix B500',
        price: '$67.00',
        discount: '-64%',
        image: require('../assets/images/dummy/camera_02.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 4,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 5,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 6,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 7,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 8,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    }
]

const featuredProducts = [
    {
        id: 1,
        title: "Up To 50% Off\nHoliday Bit",
        image: require('../assets/images/dummy/featured_01.png')
    }
]

const topSearch = [
    {
        id: 1,
        keyword: "Man",
        result: "35k",
        image: require('../assets/images/dummy/top_01.png')
    },
    {
        id: 2,
        keyword: "Women",
        result: "35k",
        image: require('../assets/images/dummy/top_02.png')
    },
    {
        id: 3,
        keyword: "Jeans",
        result: "45k",
        image: require('../assets/images/dummy/top_03.png')
    }
]

const suggestedSearch = [
    {
        id: 1,
        keyword: "T-Shirt"
    },
    {
        id: 2,
        keyword: "Baggy"
    },
    {
        id: 3,
        keyword: "Kids"
    },
    {
        id: 4,
        keyword: "Ot"
    },
    {
        id: 5,
        keyword: "Jacket"
    },
    {
        id: 6,
        keyword: "Dress"
    },
    {
        id: 7,
        keyword: "Dress"
    }
]

const recentSearch = [
    {
        id: 1,
        keyword: "Summer dress"
    },
    {
        id: 2,
        keyword: "Summer beach wear"
    },
    {
        id: 3,
        keyword: "Children's hats"
    },
    {
        id: 4,
        keyword: "Doice & Babana"
    }
]

export default {
    banners,
    flashDeals,
    promoItems,
    categories,
    quickALinks,
    services,
    chartData,
    orders,
    flashSales,
    brands,
    flashSaleItems,
    featuredProducts,
    topSearch,
    suggestedSearch,
    recentSearch
}