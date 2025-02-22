import { ParfumeEntity } from "@/entities/parfume/model/parfume";

export const perfumes: ParfumeEntity[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    slug: "interlude-for-men",
    title: "Interlude For Men",
    brand: "Amouage",
    price: [11000, 20000],
    ml: [5, 10],
    description:
      "Interlude - это пряно-древесный аромат, который открывается пикантным бергамотом, орегано и маслом ягод пименто, создавая ощущение хаоса и напряжения. В сердце появляются амбра, ладан и опопонакс, которые добавляют глубину и теплоту. База состоит из насыщенных нот уда, сандалового дерева, кожи и пачули, завершая композицию сложностью и утонченностью.",
    img: "/assets/img/perfume/amouage_interlude.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    slug: "blue-sapphire",
    title: "Blue Sapphire",
    brand: "Boadicea the Victorious",
    price: [23000, 42000],
    ml: [5, 10],
    description:
      "Царственное слияние цитрусовых нот и зеленых аккордов с гармоничными оттенками розы, кардамона, индийского жасмина, уда и пачули. Blue Sapphire - это благородный аромат, вдохновленный сиянием драгоценного камня, воплощающий роскошь и элегантность.",
    img: "/assets/img/perfume/boadicea_blue_sapphire.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    slug: "reflection-45",
    title: "Reflection 45",
    brand: "Amouage",
    price: [15000, 27000],
    ml: [5, 10],
    description:
      "Reflection 45 Man стал более насыщенным, мощным и продуманным. Благодаря щедрой 45-процентной концентрации композиция раскрывает сложные и многослойные ноты, переплетающиеся с древесными и пряными оттенками. Это современная интерпретация классического Reflection Man с усиленной глубиной и стойкостью.",
    img: "/assets/img/perfume/amouage_reflection_45.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    slug: "black-hashish",
    title: "Black Hashish",
    brand: "Arte Olfatto",
    price: [4400, 7920],
    ml: [5, 10],
    description:
      "Black Hashish - теплый и обволакивающий аромат с запахом ладана и крепкого дыма. Он обладает насыщенным и гипнотическим настроением, в котором сочетаются аккорды черного дерева, смолистых нот и пряных специй, создавая атмосферу загадочности и утонченности.",
    img: "/assets/img/perfume/arte_olfatto_black_hashish.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    slug: "gris-charnel-extrait",
    title: "Gris Charnel Extrait",
    brand: "BDK Parfums",
    price: [9350, 16830],
    ml: [5, 10],
    description:
      "Gris Charnel Extrait раскрывает интенсивность оригинальной подписи, чтобы извлечь более богатую и многогранную версию. Пряная теплая основа из кардамона и черного чая смешивается с элегантной инжирной сладостью, а затем дополняется мощными древесными аккордами и сладкой ванилью.",
    img: "/assets/img/perfume/bdk_gris_charnel.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    slug: "orom",
    title: "Orom",
    brand: "BVLGARI",
    price: [18000, 31000],
    ml: [5, 10],
    description:
      "Погрузитесь в калейдоскоп зелени и синевы живописного острова Мадагаскар — земли, хранящей геологические сокровища, такие как магический лабрадорит. Этот удивительный камень, рожденный природой, завораживает своими волшебными переливами, похожими на танец полярного сияния, околдовывая игрой света и цвета",
    img: "/assets/img/perfume/bdk_oud_abramad.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    slug: "bodacious",
    title: "Bodacious",
    brand: "Boadicea the Victorious",
    price: [13000, 23000],
    ml: [5, 10],
    description:
      "Bodacious - это атака на чувства, соблазняющая, ошеломляющая и превосходная на каждом шагу. Композиция наполнена роскошными фруктовыми и цветочными нотами, приправленными тёплыми специями, создавая дерзкий и страстный аромат.",
    img: "/assets/img/perfume/boadicea_bodacious.webp",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    slug: "dragon",
    title: "Dragon",
    brand: "Boadicea the Victorious",
    price: [44000, 79200],
    ml: [5, 10],
    description:
      "С первых мгновений этого утонченного аромата ощущается мощь и изящество дракона. Великолепное сочетание цветочных, древесных и восточных нот, придающих аромату энергию, силу и страсть, оставляет незабываемое впечатление.",
    img: "/assets/img/perfume/boadicea_dragon.webp",
  },
];

export const brands = [...new Set(perfumes.map((perfume) => perfume.brand))];
