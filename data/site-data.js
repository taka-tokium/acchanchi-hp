// ============================================================
// 観戦居酒屋あっちゃん家 ホームページ データファイル
// ------------------------------------------------------------
// 日常の更新はこのファイルだけ編集すればOK。
// 編集したらブラウザをリロードすると反映される。
// 【要確認】が付いている項目はお店に確認して書き換えること。
// ============================================================

const SITE_DATA = {

  // ---------- 基本情報 ----------
  shop: {
    name: "観戦居酒屋あっちゃん家",
    nameRoman: "ACCHANCHI",
    catchphrase: "スポーツ観戦しながら、うまい酒とメシ。",
    tel: "0475-47-3914",
    address: "〒297-0074 千葉県茂原市小林3136-4",
    access: "JR外房線「新茂原駅」から徒歩6分",
    instagramUrl: "https://www.instagram.com/kansen_izakaya_acchanchi/",
    instagramId: "@kansen_izakaya_acchanchi",
  },

  // ---------- 検索エンジン用の構造化データ（Google検索・マップ対策） ----------
  // 住所や営業時間を変えたらここも合わせて更新すること
  structured: {
    type: "BarOrPub",
    postalCode: "297-0074",
    region: "千葉県",
    locality: "茂原市",
    street: "小林3136-4",
    // 形式：曜日（Mo/Tu/We/Th/Fr/Sa/Su） 開店-閉店。定休日の曜日は入れない
    openingHours: "Mo,Tu,Th,Fr,Sa,Su 17:00-22:00",
    priceRange: "¥¥",
  },

  // ---------- 営業時間 ----------
  // 行を増やせば曜日ごとに分けられる
  hours: [
    { label: "営業時間", value: "17:00〜22:00" },
    { label: "定休日", value: "水曜日" },
    { label: "試合開催日", value: "試合に合わせて営業時間変更あり<br>（Instagramで告知）" },
  ],

  // ---------- 設備・席数など（店舗情報テーブルに表示） ----------
  facility: [
    { label: "席数", value: "カウンター6席／テーブル3卓（各6名）<br>座敷2卓（4名・6名）" },
    { label: "貸切", value: "20名以上で貸切可能" },
    { label: "駐車場", value: "あり（15〜20台）" },
  ],

  // ---------- お店の特徴（観戦環境など） ----------
  features: [
    {
      icon: "📺",
      title: "モニター5台でスポーツ観戦",
      text: "店内モニター5台でサッカー・野球など各種スポーツを放映。DAZN・WOWOWが視聴できます。",
    },
    {
      icon: "🍻",
      title: "みんなで乾杯・声出しOK",
      text: "ゴールの瞬間はみんなでハイタッチ！観戦仲間ができるお店です。",
    },
    {
      icon: "🏠",
      title: "アットホームな雰囲気",
      text: "初めてでも一人でも大丈夫。あっちゃんファミリーが温かくお迎えします。",
    },
    {
      icon: "🎉",
      title: "パブリックビューイング開催",
      text: "日本代表戦などの大一番はパブリックビューイングを開催。20名以上で貸切もOK！",
    },
    {
      icon: "🚗",
      title: "お車でも安心",
      text: "駐車場15〜20台完備。お仲間と乗り合わせでどうぞ（飲む方は運転代行・ハンドルキーパーで）。",
    },
  ],

  // ---------- メニュー ----------
  // 価格は数値のみ（円は自動で付く）。"〜"などを使いたいときは文字列でOK
  menu: [
    {
      category: "串（炭火焼き鳥）",
      note: "2本からご注文OK。味はタレ・シオ・ホリニシから選べます",
      items: [
        { name: "ねぎま", price: 150 },
        { name: "もも", price: 150 },
        { name: "かわ", price: 150 },
        { name: "レバー", price: 150 },
        { name: "つくね", price: 150 },
        { name: "かしら", price: 150 },
        { name: "ヤゲンナンコツ", price: 150 },
        { name: "タン", price: 150 },
        { name: "やきとりの盛り合わせ", price: 700 },
      ],
    },
    {
      category: "一品料理",
      note: "",
      items: [
        { name: "玉子焼き", price: 400 },
        { name: "冷やしトマト", price: 400 },
        { name: "きゅうり漬け", price: 350 },
        { name: "枝豆", price: 400 },
        { name: "タコワサ", price: 400 },
        { name: "ポテサラ", price: 350 },
      ],
    },
    {
      category: "海鮮・焼き魚",
      note: "",
      items: [
        { name: "ホタテ焼き", price: 800 },
        { name: "ガーリックシュリンプ", price: 800 },
        { name: "あさりの酒蒸し", price: 600 },
        { name: "ほっけ", price: 1100 },
        { name: "イカの一夜干し", price: 850 },
      ],
    },
    {
      category: "揚げ物",
      note: "",
      items: [
        { name: "ポテト", price: 500 },
        { name: "ポテト（のり塩）", price: 600 },
        { name: "ポテト（明太マヨ）", price: 650 },
        { name: "唐揚げ", price: 600 },
        { name: "軟骨唐揚げ", price: 700 },
        { name: "イカリング", price: 600 },
      ],
    },
    {
      category: "ご飯・麺",
      note: "",
      items: [
        { name: "チャーハン", price: 550 },
        { name: "チキンライス", price: 550 },
        { name: "醤油ラーメン", price: 500 },
      ],
    },
    {
      category: "本日のおすすめ",
      note: "内容は日替わり。店内の黒板をチェック！",
      items: [
        { name: "おすすめ①", price: 500 },
        { name: "おすすめ②", price: 1100 },
      ],
    },
    {
      category: "ビール",
      note: "",
      items: [
        { name: "生ビール（アサヒ）", price: "小350／中600／大800円" },
        { name: "瓶ビール（中瓶）", price: 650 },
        { name: "コロナビール", price: 500 },
        { name: "ノンアルコールビール（アサヒ／コロナ）", price: 350 },
      ],
    },
    {
      category: "サワー",
      note: "",
      items: [
        { name: "プレーンサワー", price: 350 },
        { name: "レモンサワー", price: 450 },
        { name: "こだわり酒場のレモンサワー", price: 450 },
        { name: "生レモンサワー", price: 500 },
        { name: "グレープフルーツサワー", price: 450 },
        { name: "カルピスサワー", price: 450 },
        { name: "男梅サワー", price: 450 },
        { name: "ゆずみつサワー", price: 450 },
        { name: "ドデカミンサワー", price: 450 },
        { name: "ライチサワー", price: 450 },
        { name: "ライフガードサワー", price: 450 },
        { name: "カシスオレンジ", price: 450 },
        { name: "カシスティー", price: 450 },
        { name: "カシスソーダ", price: 450 },
        { name: "カシスウーロン", price: 450 },
      ],
    },
    {
      category: "ハイボール",
      note: "レモン追加は＋50円",
      items: [
        { name: "角ハイボール（ジョッキ）", price: 550 },
        { name: "角ハイボール（大）", price: 750 },
        { name: "角ハイボール（濃いめ）", price: 750 },
        { name: "ジンジャーハイボール", price: 550 },
        { name: "コーラハイボール", price: 550 },
      ],
    },
    {
      category: "焼酎・日本酒",
      note: "",
      items: [
        { heading: "焼酎" },
        { name: "麦・芋・甲類（グラス）", price: 500 },
        { name: "緑茶割り", price: 500 },
        { name: "ウーロン割り", price: 500 },
        { name: "ソーダ割り", price: 500 },
        { heading: "日本酒" },
        { name: "八海山（冷酒・熱燗）", price: 650 },
      ],
    },
    {
      category: "ボトル",
      note: "割り材：氷300・水300・お茶350・ウーロン茶350・レモンカット350・梅干し250",
      items: [
        { name: "黒霧島", price: 3300 },
        { name: "赤霧島", price: 3300 },
        { name: "いいちこ", price: 3300 },
        { name: "キンミヤ", price: 3300 },
        { name: "二階堂", price: 3500 },
        { name: "角（ウイスキー）", price: 4400 },
      ],
    },
    {
      category: "ソフトドリンク",
      note: "",
      items: [
        { name: "ウーロン茶", price: 300 },
        { name: "緑茶", price: 300 },
        { name: "ジャスミン茶", price: 300 },
        { name: "コーラ", price: 300 },
        { name: "メロンソーダ", price: 300 },
        { name: "ジンジャーエール", price: 300 },
        { name: "オレンジジュース", price: 300 },
        { name: "りんごジュース", price: 300 },
        { name: "カルピス", price: 300 },
        { name: "カルピスソーダ", price: 300 },
        { name: "ゆずみつソーダ", price: 300 },
      ],
    },
  ],

  // ---------- お知らせ・イベント ----------
  // 新しいものを一番上に追加する。古いものは消してOK（3〜5件程度が見やすい）
  news: [
    {
      date: "2026-06-21",
      title: "パブリックビューイング開催！日本代表 vs チュニジア代表",
      text: "13:00キックオフ。みんなで日本代表を応援しよう！",
    },
    {
      date: "2026-06-01",
      title: "観戦居酒屋あっちゃん家 オープンしました",
      text: "スポーツ観戦をしながらお酒・お食事を楽しめるお店です。ぜひお越しください！",
    },
  ],

  // ---------- Instagram投稿の埋め込み ----------
  // 見せたい投稿のURLを追加すると、その投稿がページに埋め込まれる。
  // 例: "https://www.instagram.com/p/XXXXXXXXXXX/"
  // （投稿ページを開いて「…」→「リンクをコピー」で取得。2〜3件推奨）
  instagramPosts: [],

  // ---------- 写真ギャラリー ----------
  // images/ フォルダに写真を入れて、ここにファイル名を追加する
  // 例: { file: "yakitori.jpg", alt: "名物の焼き鳥" }
  photos: [
    { file: "yakitori-sumibi.jpg", alt: "炭火で焼き上げる焼き鳥" },
    { file: "yakitori-mori.jpg", alt: "焼き鳥盛り合わせ" },
    { file: "kushi-beer.jpg", alt: "串焼きとキンキンの生ビール" },
    { file: "maguro-sashi.jpg", alt: "まぐろのぶつ切り刺し" },
    { file: "onion-rings.jpg", alt: "オニオンリング天ぷら" },
    { file: "interior-blackboard.jpg", alt: "カウンターと黒板のおすすめメニュー" },
    { file: "interior-counter.jpg", alt: "ユニフォームが飾られた店内カウンター" },
    { file: "interior-zashiki.jpg", alt: "ゆったりくつろげる座敷席" },
    { file: "exterior-sign.jpg", alt: "入口の看板「観戦できる居酒屋だよ〜」" },
    { file: "parking.jpg", alt: "駐車場完備（お店専用P）" },
  ],

  // ---------- ヒーロー画像（トップの大きな写真） ----------
  // images/ に写真を置いてファイル名を指定。空文字ならデザイン背景を表示
  heroImage: "exterior-night.jpg",
};
