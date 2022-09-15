export type Item = {
  id: number;
  name: string;
  link: string;
};

export type GiftSuggestion = {
  items?: Item[];
  category: string;
  description: string;
  priceRange:
    | {
        min: number;
        max: number;
      }
    | string;
};

export const GIFT_SUGGESTIONS: GiftSuggestion[] = [
  {
    items: [
      {
        id: 101,
        name: 'Gatito traficante',
        link: 'https://br.shein.com/Cartoon-Cat-Brooch-p-8315062-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 102,
        name: 'Will Turner',
        link: 'https://br.shein.com/Cartoon-Animal-Brooch-p-3195121-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 103,
        name: 'Over Thinker',
        link: 'https://br.shein.com/Cartoon-Design-Brooch-p-2087932-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 104,
        name: 'Clube da Chica',
        link: 'https://br.shein.com/Cat-Design-Round-Brooch-p-1966002-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 105,
        name: 'Kit gatinhos',
        link: 'https://br.shein.com/4pcs-Cartoon-Design-Brooch-p-2197880-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 106,
        name: 'Double trouble',
        link: 'https://br.shein.com/2pcs-Cartoon-Cat-Brooch-p-2931581-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
      {
        id: 107,
        name: 'Imma take ma horse',
        link: 'https://br.shein.com/Cartoon-Cat-Brooch-p-2649537-cat-1777.html?src_identifier=st%3D2%60sc%3DBroche%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1662939186962&mallCode=1&scici=Search~~EditSearch~~1~~Broche~~~~0',
      },
    ],
    category: 'Broches',
    description: 'Amo qualquer broche fofo',
    priceRange: { min: 5, max: 7 },
  },
  {
    items: [
      {
        id: 201,
        name: 'Gatito da sorte',
        link: 'https://br.shein.com/Chinese-Letter-Graphic-Geometric-Drop-Earrings-p-1730188-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 202,
        name: 'Paws',
        link: 'https://br.shein.com/Claw-Drop-Earrings-p-1611907-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 203,
        name: 'Cutes',
        link: 'https://br.shein.com/3pairs-Cartoon-Drop-Earrings-p-3264698-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 204,
        name: 'Dinossaur',
        link: 'https://br.shein.com/Cartoon-Animal-Drop-Earrings-p-2672017-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 205,
        name: 'Kawaii',
        link: 'https://br.shein.com/4pairs-Heart-Charm-Drop-Earrings-p-5837207-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 206,
        name: 'Ghost cat',
        link: 'https://br.shein.com/Heart-Drop-Earrings-p-8777127-cat-1757.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
      {
        id: 207,
        name: 'Lollipop',
        link: 'https://br.shein.com/Girls-Lollipop-Drop-Earrings-p-5788727-cat-2459.html?src_identifier=st%3D2%60sc%3DBrinco%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1662939642258&mallCode=1&scici=Search~~EditSearch~~1~~Brinco~~~~0',
      },
    ],
    category: 'Brincos',
    description: 'Brincos diferetões e cool',
    priceRange: { min: 6, max: 15 },
  },
  {
    items: [
      {
        id: 301,
        name: 'Gritito',
        link: 'https://br.shein.com/Cat-Print-Crop-Tee-p-9567312-cat-1738.html?url_from=adpla-br-pla-sw2112302309820561-S_GPM&cid=16031413408&setid=&adid=&pf=GOOGLE&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE0J5m2yzS3xRqeP9x_vr-6LqPzvOe_1C1ne9DrJDhxWqcoZvc1YsJIaAl1vEALw_wcB',
      },
      {
        id: 302,
        name: 'Why u looking',
        link: 'https://br.shein.com/Cat-And-Slogan-Graphic-Tee-p-10809922-cat-1738.html?url_from=adpla-br-pla-sw2206103334578758-M_GPM&cid=16031413408&setid=&adid=&pf=GOOGLE&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE1EMXGq-oxt8_ydS-28PCYGrC-2fvM12UyaemjuntnNvCXkHQI7xjgaAqfJEALw_wcB',
      },
      {
        id: 303,
        name: 'Memitos',
        link: 'https://www.hippieartesanatos.com/produto/camiseta-memes-de-gato-off-white-120429?utm_source=&utm_medium=&utm_campaign=',
      },
      {
        id: 304,
        name: 'Space cat',
        link: 'https://www.youcom.com.br/camiseta-oversized-gato-fantastic-p1104646',
      },
      {
        id: 305,
        name: 'Miau',
        link: 'https://www.cea.com.br/camiseta-oversized-manga-curta-gato-duda-beat-off-white-1034458-off_white/p',
      },
      {
        id: 306,
        name: 'Artisto gatos',
        link: 'https://www.hippieartesanatos.com/produto/camiseta-gatos-art-caramelo-120582?utm_source=&utm_medium=&utm_campaign=',
      },
      {
        id: 307,
        name: 'Cat invasion',
        link: 'https://www.lojasrenner.com.br/p/blusa-alongada-em-algodao-com-estampa-cat-invasion/-/A-592196587-br.lr?sku=592196608',
      },
    ],
    category: 'Camisetas',
    description: 'De gatos',
    priceRange: { min: 35, max: 90 },
  },
  {
    items: [
      {
        id: 401,
        name: 'Flowers',
        link: 'https://br.shein.com/4pairs-Flower-Print-Crew-Socks-p-10231000-cat-1899.html?url_from=adpla-br-pla-si2203271233121122-one-size_GPM&cid=16905580279&setid=&adid=&pf=GOOGLE&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE0ugLW5nynjWcV0jWBmfi85Tat32j72hUMoniwKhlPvFju438lTQaIaAlNjEALw_wcB',
      },
      {
        id: 402,
        name: 'Sullivan',
        link: 'https://www.americanas.com.br/produto/4913937711?opn=YSMESP&offerId=6255cb8787c00289c20e57e1&srsltid=AdGWZVTebSpSSgWdcK3gz_WdBPHpOa4tEFEHt-X0jaRSZ4PMzyudUMzY2Is&cor=Branco&tamanho=36-43',
      },
      {
        id: 403,
        name: 'Bob Esponja',
        link: 'https://www.lojasrenner.com.br/p/meia-cano-alto-em-algodao-estampa-bob-esponja/-/A-552182631-br.lr?sku=552182640&p=refresh&srsltid=AdGWZVQVX321fmztThuypyjqtzEZ4TLt-tL7SPpOzzbTNgHVFVDSemkWHxk',
      },
      {
        id: 404,
        name: 'Pato',
        link: 'https://br.shein.com/Cartoon-Graphic-Crew-Socks-p-3249199-cat-1899.html?url_from=adpla-br-pla-sw2107191844690814-one-size_GPM&cid=16905580279&setid=&adid=&pf=GOOGLE&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE1LnMZNjSQVcW3MuPAZraxcNBZXfwyv52pitsQUkeIsakn_4wQe20waAu0tEALw_wcB',
      },
      {
        id: 405,
        name: 'Stranger Things',
        link: 'https://www.piticas.com.br/meia-st-things-amizade-3-tamanhos-1878/p?idsku=4078&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE3zRBvVkYIV4h6jXhg-6fTvbPN4XfJOR92EaNTkNKDQwSNNPhUXtrsaAlIIEALw_wcB',
      },
      {
        id: 406,
        name: 'Cheese',
        link: 'https://br.shein.com/Cheese-Print-Crew-Socks-p-10247481-cat-1899.html?url_from=adpla-br-pla-si2203241447113973-one-size_GPM&cid=16905580279&setid=&adid=&pf=GOOGLE&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE0av6eiEZWmDNMF2n4ACAz0EHUccj1XiFBck6qf0MQW_pEr5g73ojUaAjbLEALw_wcB',
      },
      {
        id: 407,
        name: 'Hearts',
        link: 'https://br.shein.com/ROMWE-Sweetness-2pairs-Heart-Graphic-Crew-Socks-p-9492017-cat-1899.html?src_identifier=st%3D2%60sc%3Dmeia%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1662940780153&mallCode=1&scici=Search~~EditSearch~~1~~meia~~~~0',
      },
    ],
    category: 'Meias',
    description: 'Com estampas e coloridas',
    priceRange: { min: 8, max: 40 },
  },
  {
    items: [
      {
        id: 501,
        name: 'Happy hour',
        link: 'https://www.amazon.com.br/Happy-Hour-Precisamente-Vermelho-Laranja/dp/B07ZHR51T3/ref=asc_df_B07ZHR51T3/?tag=googleshopp00-20&linkCode=df0&hvadid=393609811349&hvpos=&hvnetw=g&hvrand=17162565375188013398&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-1009786304786&psc=1',
      },
      {
        id: 502,
        name: 'Arquiteto?',
        link: 'https://www.amazon.com.br/PaperGames-PPG-J038-Architectura/dp/B0898DWCNQ/ref=asc_df_B0898DWCNQ/?tag=googleshopp00-20&linkCode=df0&hvadid=398201773809&hvpos=&hvnetw=g&hvrand=16682189264000501820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-916207623518&psc=1',
      },
      {
        id: 503,
        name: 'Foi a Chica',
        link: 'https://www.amazon.com.br/Quem-Foi-Jogo-Cartas-Papergames/dp/B07RK4HWBS/ref=asc_df_B07RK4HWBS/?tag=googleshopp00-20&linkCode=df0&hvadid=379738478788&hvpos=&hvnetw=g&hvrand=16682189264000501820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-812003991769&psc=1',
      },
      {
        id: 504,
        name: 'To vendo nada',
        link: 'https://www.amazon.com.br/PaperGames-PPG-J045-Misty/dp/B08P65R7V3/ref=asc_df_B08P65R7V3/?tag=googleshopp00-20&linkCode=df0&hvadid=396787129870&hvpos=&hvnetw=g&hvrand=16682189264000501820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-1078662325110&psc=1',
      },
      {
        id: 505,
        name: 'Taco gato...',
        link: 'https://www.amazon.com.br/Taco-Gato-Cabra-Queijo-Pizza/dp/B085N8W621/ref=asc_df_B085N8W621/?tag=googleshopp00-20&linkCode=df0&hvadid=394149377963&hvpos=&hvnetw=g&hvrand=16682189264000501820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-921776697554&psc=1',
      },
      {
        id: 506,
        name: 'Dumb ways',
        link: 'https://www.copagloja.com.br/mortes-estupidas/p?idsku=1735&idtag=7fe427d4-45c7-4427-839c-0058c2cc152e&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE1I-5OuMAYktxs9HZbgI-kaGAc-5VFpG0jtoy_QuEUDXMMmpxTGh74aAvXKEALw_wcB',
      },
      {
        id: 507,
        name: 'Se vira nos 30',
        link: 'https://www.amazon.com.br/Brinquedos-Estrela-1201602000101-Jogo-Multicores/dp/B01LZ826TS/ref=asc_df_B01LZ826TS/?tag=googleshopp00-20&linkCode=df0&hvadid=379715629362&hvpos=&hvnetw=g&hvrand=16682189264000501820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-809858161862&psc=1',
      },
    ],
    category: 'Jogos',
    description: 'Tabuleiro ou cartas hehe',
    priceRange: { min: 45, max: 100 },
  },
  {
    items: [
      {
        id: 601,
        name: 'Violent Cases',
        link: 'https://www.amazon.com.br/dp/8576571838/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=89N2MBF3SW9RMR36FDVF&pf_rd_t=101&pf_rd_p=580b6623-a6ba-46a0-b19e-e3149b17c59d&pf_rd_i=14765815011',
      },
      {
        id: 602,
        name: 'O Oceano no Fim',
        link: 'https://www.amazon.com.br/dp/8580573688/ref=s9_acsd_al_bw_c2_x_4_t?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-4&pf_rd_r=89N2MBF3SW9RMR36FDVF&pf_rd_t=101&pf_rd_p=6582568c-0dd3-4f29-9e30-22ce5cc43ec1&pf_rd_i=14765815011',
      },
      {
        id: 603,
        name: 'A B Chuchu',
        link: 'https://www.darksidebooks.com.br/fantastico-alfabeto-lovecraft-205/p?idsku=499',
      },
      {
        id: 604,
        name: 'Stars',
        link: 'https://www.darksidebooks.com.br/nos-e-as-estrelas--brinde-exclusivo/p',
      },
      {
        id: 605,
        name: '30 Dias',
        link: 'https://www.darksidebooks.com.br/30-dias-de-noite--edicao-comemorativa-drk-x/p',
      },
      {
        id: 606,
        name: 'Lady Killers',
        link: 'https://www.darksidebooks.com.br/lady-killers--assassinas-em-serie---drk-x/p',
      },
      {
        id: 607,
        name: 'Chuchulu',
        link: 'https://www.darksidebooks.com.br/o-chamado-de-cthulhu--brinde-exclusivo/p',
      },
    ],
    category: 'Livros',
    description: 'Neil and Darkside',
    priceRange: { min: 50, max: 90 },
  },
  {
    category: 'Vale Tattoo',
    description: 'Hehe',
    priceRange: 'Any troco',
  },
  {
    category: 'Vale Tattoo',
    description: 'Hehe',
    priceRange: 'Any troco',
  },
  {
    category: 'Vale Tattoo',
    description: 'Hehe',
    priceRange: 'Any troco',
  },
];
