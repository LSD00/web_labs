'use strict';

const dishes = [
    {
        keyword: 'earl-grey',
        name: 'Эрл Грей с бергамотом',
        price: 180,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/grey.jpg',
        kind: 'flavored'
    },
    {
        keyword: 'assam',
        name: 'Классический Ассам',
        price: 170,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/assam.jpg',
        kind: 'classic'
    },
    {
        keyword: 'masala',
        name: 'Пряный чай масала с молоком',
        price: 220,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/grey.jpg',
        kind: 'milk'
    },
    {
        keyword: 'ceylon',
        name: 'Цейлонский черный чай',
        price: 160,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/assam.jpg',
        kind: 'classic'
    },
    {
        keyword: 'currant-tea',
        name: 'Черный чай с черной смородиной',
        price: 210,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/grey.jpg',
        kind: 'flavored'
    },
    {
        keyword: 'black-tea-latte',
        name: 'Чайный латте с ванилью',
        price: 240,
        category: 'black-tea',
        count: '400 мл',
        image: 'images/black-latte.jpg',
        kind: 'milk'
    },
    {
        keyword: 'sencha',
        name: 'Японская сенча',
        price: 190,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/tea.jpg',
        kind: 'classic'
    },
    {
        keyword: 'jasmine',
        name: 'Зеленый чай с жасмином',
        price: 200,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/tea.jpg',
        kind: 'floral'
    },
    {
        keyword: 'oolong',
        name: 'Молочный улун',
        price: 230,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/assam.jpg',
        kind: 'oolong'
    },
    {
        keyword: 'longjing',
        name: 'Лунцзин (Колодец дракона)',
        price: 250,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/tea.jpg',
        kind: 'classic'
    },
    {
        keyword: 'osmanthus',
        name: 'Зеленый чай с османтусом',
        price: 220,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/green-flower.jpg',
        kind: 'floral'
    },
    {
        keyword: 'da-hong-pao',
        name: 'Да Хун Пао',
        price: 270,
        category: 'green-tea',
        count: '400 мл',
        image: 'images/assam.jpg',
        kind: 'oolong'
    },
    {
        keyword: 'croissant',
        name: 'Круассан с миндальным кремом',
        price: 160,
        category: 'pastry',
        count: '120 г',
        image: 'images/cr.jpg',
        kind: 'sweet'
    },
    {
        keyword: 'cinnamon-roll',
        name: 'Булочка с корицей',
        price: 140,
        category: 'pastry',
        count: '110 г',
        image: 'images/xleb.jpg',
        kind: 'sweet'
    },
    {
        keyword: 'lemon-tart',
        name: 'Лимонный тарт',
        price: 210,
        category: 'pastry',
        count: '130 г',
        image: 'images/xleb_mnoga.jpg',
        kind: 'sweet'
    },
    {
        keyword: 'cheese-puff',
        name: 'Слойка с сыром',
        price: 180,
        category: 'pastry',
        count: '130 г',
        image: 'images/pastry-cheese.jpg',
        kind: 'savory'
    },
    {
        keyword: 'spinach-pie',
        name: 'Пирожок со шпинатом',
        price: 190,
        category: 'pastry',
        count: '150 г',
        image: 'images/pastry-spinach.jpg',
        kind: 'savory'
    },
    {
        keyword: 'vegan-cookie',
        name: 'Овсяное печенье без молока',
        price: 120,
        category: 'pastry',
        count: '90 г',
        image: 'images/pastry-cookie.jpg',
        kind: 'vegan'
    },
    {
        keyword: 'tuna-salad',
        name: 'Салат с тунцом и зеленью',
        price: 360,
        category: 'starter',
        count: '220 г',
        image: 'images/starter-tuna.jpg',
        kind: 'fish'
    },
    {
        keyword: 'chicken-sandwich',
        name: 'Сэндвич с курицей',
        price: 290,
        category: 'starter',
        count: '200 г',
        image: 'images/starter-chicken.jpg',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 320,
        category: 'starter',
        count: '200 г',
        image: 'images/starter-caprese.jpg',
        kind: 'veg'
    },
    {
        keyword: 'vegetable-salad',
        name: 'Салат из свежих овощей',
        price: 240,
        category: 'starter',
        count: '220 г',
        image: 'images/starter-vegetable.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries-sauce',
        name: 'Картофель фри с соусом',
        price: 210,
        category: 'starter',
        count: '180 г',
        image: 'images/starter-fries.jpg',
        kind: 'veg'
    },
    {
        keyword: 'bruschetta',
        name: 'Картофель фри с кетчупом',
        price: 250,
        category: 'starter',
        count: '160 г',
        image: 'images/starter-bruschetta.jpg',
        kind: 'veg'
    },
    {
        keyword: 'cheesecake',
        name: 'Классический чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'images/dessert-cheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate-cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: 'images/dessert-chocolate.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate-cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: 'images/dessert-cake.jpg',
        kind: 'small'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава к чаю',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: 'images/dessert-baklava.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts-3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 г',
        image: 'images/dessert-donuts3.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts-6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 г',
        image: 'images/dessert-donuts6.jpg',
        kind: 'large'
    }
];
