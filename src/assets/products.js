const products = {
  categories: [
    {
      name: "Фаст Фуд",
      slug: "fastfood",
      subcategories: [
        {
          name: "Пиццы",
          slug: "pizza",
          items: [
            {
              id: "pizza_4_seasons",
              name: "4 Сезона",
              image: "pizza_4_seasons.png",
              price: 3090,
              cookingTime: 15,
              details:
                "Томатный соус, моцарелла, ветчина, грибы, артишоки, оливки — по секторам",
            },
            {
              id: "pizza_bbq",
              name: "BBQ",
              image: "pizza_bbq.png",
              price: 2790,
              cookingTime: 15,
              details: "BBQ соус, курица, бекон, красный лук, моцарелла",
            },
            {
              id: "pizza_bolognese",
              name: "Болоньезе",
              image: "pizza_bolognese.png",
              price: 2890,
              cookingTime: 15,
              details:
                "Фарш из говядины, томатный соус, лук, чеснок, моцарелла",
            },
            {
              id: "pizza_margarita",
              name: "Маргарита",
              image: "pizza_margarita.png",
              price: 2490,
              cookingTime: 15,
              details: "Томатный соус, моцарелла, свежие томаты, базилик",
            },
            {
              id: "pizza_pepperoni",
              name: "Пепперони",
              image: "pizza_pepperoni.png",
              price: 2990,
              cookingTime: 15,
              details: "Острые колбаски пепперони, томатный соус, моцарелла",
            },
            {
              id: "pizza_caesar",
              name: "Цезарь",
              image: "pizza_caesar.png",
              price: 2690,
              cookingTime: 15,
              details:
                "Курица, листья салата, томаты черри, соус цезарь, пармезан",
            },
            {
              id: "pizza_cheeseburger",
              name: "Чизбургер",
              image: "pizza_cheeseburger.png",
              price: 2990,
              cookingTime: 15,
              details:
                "Говядина, маринованные огурцы, кетчуп, сыр, лук, горчица",
            },
            {
              id: "pizza_cheese",
              name: "Сырная",
              image: "pizza_cheese.png",
              price: 2290,
              cookingTime: 15,
              details: "Моцарелла, пармезан, дорблю, гауда, сливочный соус",
            },
            {
              id: "pizza_philadelphia",
              name: "Филадельфия",
              image: "pizza_philadelphia.png",
              price: 3590,
              cookingTime: 15,
              details:
                "Сливочный соус, лосось, моцарелла, огурец, сыр филадельфия",
            },
          ],
        },
        {
          name: "Донеры",
          slug: "doner",
          items: [
            {
              id: "doner_assorti",
              name: "Донер Ассорти",
              image: "doner_assorti.png",
              price: 1490,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "doner_beef",
              name: "Донер Говяжий",
              image: "doner_beef.png",
              price: 1590,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "doner_chicken",
              name: "Донер Куриный",
              image: "doner_chicken.png",
              price: 1190,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "doner_fried_chicken",
              name: "Донер Жареный Куриный",
              image: "doner_fried_chicken.png",
              price: 1490,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "doner_lyulya",
              name: "Донер Люля",
              image: "doner_lyulya.png",
              price: 1690,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "cheese",
              name: "Сыр к донеру",
              image: "cheese.png",
              price: 150,
              cookingTime: 5,
              details: "typing...",
            },
          ],
        },
        {
          name: "Бургеры",
          slug: "burger",
          items: [
            {
              id: "burger_chicken",
              name: "Бургер Куриный",
              image: "burger_chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "burger_meat",
              name: "Бургер Говяжий",
              image: "burger_chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Снеки",
          slug: "snacks",
          items: [
            {
              id: "snacks_fries",
              name: "Картошки Фри",
              image: "fries.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "snacks_potato_slices",
              name: "Картофельные Дольки",
              image: "potato_slices.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "snacks_nuggets",
              name: "Наггетсы",
              image: "nuggets.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "snacks_chicken_10",
              name: "Чикен 10",
              image: "chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "snacks_chicken_20",
              name: "Чикен 20",
              image: "chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "snacks_chicken_30",
              name: "Чикен 30",
              image: "chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Горячие",
      slug: "hot_dishes",
      subcategories: [
        {
          name: "Горячие",
          slug: "hot_meals",
          items: [
            {
              id: "hot_lamb_grill",
              name: "Баранина на жаровне",
              image: "hot_lamb_grill.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_beshbarmak",
              name: "Бешбармак",
              image: "hot_beshbarmak.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_dumplings",
              name: "Вареники",
              image: "hot_dumplings.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_buckwheat_cutlet",
              name: "Гречка с котлетой",
              image: "hot_buckwheat_cutlet.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_fried_fish",
              name: "Жареная Рыба",
              image: "hot_fried_fish.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_kazan_kebab",
              name: "Казан Кебаб",
              image: "hot_kazan_kebab.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_chicken_grill",
              name: "Курица на жаровне",
              image: "hot_chicken_grill.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_kuirdak",
              name: "Куырдак",
              image: "hot_kuirdak.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_fried_manty",
              name: "Манты Жареные",
              image: "hot_fried_manty.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_meat_thai",
              name: "Мясо по Тайский",
              image: "hot_meat_thai.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_tashkent_pilaf",
              name: "Плов Ташкентский",
              image: "hot_tashkent_pilaf.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_mashed_potato_cutlet",
              name: "Пюре с котлетой",
              image: "hot_mashed_potato_cutlet.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_rice_cutlet",
              name: "Рис с котлетой",
              image: "hot_rice_cutlet.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_khan_pilaf",
              name: "Хан Плов",
              image: "hot_khan_pilaf.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "hot_khoshan",
              name: "Хошан",
              image: "hot_khoshan.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Супы",
          slug: "soups",
          items: [
            {
              id: "soup_nohat_shorpa",
              name: "Нохат Шорпа",
              image: "soup_nohat_shorpa.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "soup_chicken_noodle",
              name: "Суп лапша с Курицей",
              image: "soup_chicken_noodle.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "soup_lamb_shorpa",
              name: "Шорпа Баранина",
              image: "soup_lamb_shorpa.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Рамён",
          slug: "ramen",
          items: [
            {
              id: "ramen_beef",
              name: "Рамён с Говядиной",
              image: "ramen_beef.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "ramen_chicken",
              name: "Рамён с Курицей",
              image: "ramen_chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Лагман",
          slug: "lagman",
          items: [
            {
              id: "lagman_guyru",
              name: "Лагман Гуйру",
              image: "lagman_guyru.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "lagman_suyru",
              name: "Лагман Суйру",
              image: "lagman_suyru.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "lagman_tsomyan",
              name: "Лагман Цомян",
              image: "lagman_tsomyan.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Паста",
          slug: "pasta",
          items: [
            {
              id: "pasta_fettuccine",
              name: "Паста Фетучини",
              image: "pasta_fettuccine.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Напитки",
      slug: "drinks",
      subcategories: [
        {
          name: "Чай",
          slug: "tea",
          items: [
            {
              id: "tea_black",
              name: "Черный чай",
              image: "tea_black.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_milk",
              name: "Чай с молоком",
              image: "tea_milk.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_kazakh",
              name: "Чай по казахски с тары",
              image: "tea_kazakh.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_arafat",
              name: "Арафат",
              image: "tea_arafat.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_tashkent",
              name: "Ташкентский",
              image: "tea_tashkent.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_fruit",
              name: "Фруктовый",
              image: "tea_fruit.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "tea_moroccan",
              name: "Марокканский",
              image: "tea_moroccan.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
          ],
        },
        {
          name: "Лимонады",
          slug: "lemonade",
          items: [
            {
              id: "kiwi_passion",
              name: "Киви - Маракуя",
              image: "kiwi-passion.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "mango_passion",
              name: "Манго - Маракуя",
              image: "mango-passion.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "mojito",
              name: "Мохито",
              image: "mojito.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "tarragon",
              name: "Тархун",
              image: "tarragon.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "apple_passion",
              name: "Яблоко - Маракуя",
              image: "apple-passion.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "berry",
              name: "Ягодный",
              image: "berry.png",
              price: 100,
              cookingTime: 5,
              details: "typing...",
            },
          ],
        },
        {
          name: "Холодные напитки",
          slug: "cold_drinks",
          items: [
            {
              id: "asu",
              name: "Asu",
              image: "asu.png",
              price: 590,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "pepsi",
              name: "Pepsi",
              image: "pepsi.png",
              price: 790,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "gracio",
              name: "Грацио",
              image: "gracio.png",
              price: 990,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "kids_juice",
              name: "Детский сок с трубочкой",
              image: "kids_juice.png",
              price: 390,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "turkish_ayran",
              name: "Турецкий айран",
              image: "turkish_ayran.png",
              price: 390,
              cookingTime: 5,
              details: "typing...",
            },
            {
              id: "qymyz",
              name: "Кымыз",
              image: "qymyz.png",
              price: 1590,
              cookingTime: 5,
              details: "typing...",
            },
          ],
        },
        {
          name: "Милкшейки",
          slug: "milkshake",
          items: [
            {
              id: "milkshake_chocolate",
              name: "Шоколадный",
              image: "milkshake_chocolate.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "milkshake_creamy",
              name: "Сливочный",
              image: "milkshake_creamy.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "milkshake_strawberry",
              name: "Клубничный",
              image: "milkshake_strawberry.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Салаты",
      slug: "salads",
      subcategories: [
        {
          name: "Овощные",
          slug: "vegetable",
          items: [
            {
              id: "salad_achuchuk",
              name: "Ачучук",
              image: "salad_achuchuk.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_greek",
              name: "Греческий Салат",
              image: "salad_greek.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_caucasian_cut",
              name: "Кавказская Нарезка",
              image: "salad_caucasian_cut.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_chicken_assorti",
              name: "Куриное Ассорти",
              image: "salad_chicken_assorti.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_meat_assorti",
              name: "Мясное Ассорти",
              image: "salad_meat_assorti.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_fish_assorti",
              name: "Рыбное Ассорти",
              image: "salad_fish_assorti.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_fresh",
              name: "Свежий Салат",
              image: "salad_fresh.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_thai",
              name: "Тайский Салат",
              image: "salad_thai.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_warm",
              name: "Теплый Салат",
              image: "salad_warm.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "salad_caesar_chicken",
              name: "Цезарь с Курицей",
              image: "salad_caesar_chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Мясное",
      slug: "meats",
      subcategories: [
        {
          name: "Шашлыки",
          slug: "shashlik",
          items: [
            {
              id: "meat_sheep",
              name: "Баранина",
              image: "meat_sheep.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_grilled_chicken",
              name: "Куры Гриль",
              image: "meat_grilled_chicken.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_lyulya_kebab",
              name: "Люля Кебаб",
              image: "meat_lyulya_kebab.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_chicken_leg",
              name: "Окорочка",
              image: "meat_chicken_leg.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_liver",
              name: "Печень",
              image: "meat_liver.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_duck",
              name: "Утка",
              image: "meat_duck.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Стейки",
          slug: "steaks",
          items: [
            {
              id: "meat_lamb_rack",
              name: "Баранья Корейка",
              image: "meat_lamb_rack.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_tbone",
              name: "Тибон",
              image: "meat_tbone.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meat_ribeye",
              name: "Рибай",
              image: "meat_ribeye.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "На заказ",
      slug: "dishes_to_order",
      subcategories: [
        {
          name: "7 - 8 человек",
          slug: "seven_eight_people",
          items: [
            {
              id: "beshbarmak_beef",
              name: "Бешбармак Говядина",
              image: "beshbarmak_beef.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "beshbarmak_horse",
              name: "Бешбармак Конина",
              image: "beshbarmak_horse.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "damlyama",
              name: "Дамляма",
              image: "damlyama.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "fried_fish",
              name: "Жареная Рыба",
              image: "fried_fish.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "kazak_plov",
              name: "Казак Плов",
              image: "kazak_plov.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "kuirdak",
              name: "Куырдак",
              image: "kuirdak.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "saj_assorti",
              name: "Садж Ассорти",
              image: "saj_assorti.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "khansky_plov",
              name: "Ханский Плов",
              image: "khansky_plov.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "shah_plov",
              name: "Шах Плов",
              image: "shah_plov.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
        {
          name: "Больше Мясо",
          slug: "more_meat",
          items: [
            {
              id: "tagam_mix_2",
              name: "Тагам Микс № 2",
              image: "tagam_mix_2.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "tagam_mix_3",
              name: "Тагам Микс № 3",
              image: "tagam_mix_3.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meter_shashlik_1",
              name: "Метровый Шашлык № 1",
              image: "meter_shashlik_1.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "meter_shashlik_2",
              name: "Метровый Шашлык № 2",
              image: "meter_shashlik_2.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "assorti_1",
              name: "Ассорти № 1",
              image: "assorti_1.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "assorti_2",
              name: "Ассорти № 2",
              image: "assorti_2.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Хлебная",
      slug: "bread",
      subcategories: [
        {
          name: "Мучное",
          slug: "bakery",
          items: [
            {
              id: "bread_bauyrsak",
              name: "Бауырсак",
              image: "bread_bauyrsak.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "bread_lavash",
              name: "Лаваш",
              image: "bread_lavash.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "bread_lepeshka",
              name: "Лепешка",
              image: "bread_lepeshka.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "bread_basket",
              name: "Хлебная Корзина",
              image: "bread_basket.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Десерты",
      slug: "desserts",
      subcategories: [
        {
          name: "Десерты",
          slug: "desserts",
          items: [
            {
              id: "honey_cake",
              name: "Медовый торт",
              image: "honey_cake.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "trifle",
              name: "Трайфл",
              image: "trifle.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "fruit_cut",
              name: "Фруктовая нарезка",
              image: "fruit_cut.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
            {
              id: "oriental_sweets",
              name: "Восточные сладости",
              image: "oriental_sweets.png",
              price: 100,
              cookingTime: 10,
              details: "typing...",
            },
          ],
        },
      ],
    },
    {
      name: "Соусы",
      slug: "sauces",
      subcategories: [
        {
          name: "Соус",
          slug: "sauce",
          items: [
            {
              id: "sauce_white",
              name: "Белый",
              image: "sauce_white.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "sauce_ketchup",
              name: "Кетчуп",
              image: "sauce_ketchup.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "sauce_cheese",
              name: "Сырный",
              image: "sauce_cheese.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
            {
              id: "sauce_bbq",
              name: "Шашлычный",
              image: "sauce_bbq.png",
              price: 100,
              cookingTime: 15,
              details: "typing...",
            },
          ],
        },
      ],
    },
  ],
};

export default products;
