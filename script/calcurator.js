import { getLocationParm } from "./urlparser.js"
import { NEXT_LV_EXP, ASCEND_RES, TARENT_RES } from "./data.js"

const API_URL = "https://script.google.com/macros/s/AKfycbxzA8lVK1Qn8Tbv4jxmYehvxkN5LoP_zYFIboY1Pu0G_rXgHsIh4KYN-O5Tku0X1Duq/exec";

/** @type {Object.<string, HTMLElement>} */
const resource_amount_element = {
    mora: undefined,
    boss_drop: undefined,
    noted_drop: undefined,
    exp_t3: undefined,
    exp_t2: undefined,
    exp_t1: undefined,
    sliver: undefined,
    fragment: undefined,
    chunk: undefined,
    gemstone: undefined,
    local_element: undefined,
    monstor_drop_t1: undefined,
    monstor_drop_t2: undefined,
    monstor_drop_t3: undefined,
    talent_t1: undefined,
    talent_t2: undefined,
    talent_t3: undefined,
    crown: undefined
}
resource_amount_element.talant1_from

const get_item_info = async () => {
    const splash = document.getElementById("splash");
    splash.textContent = "情報取得中..."
    splash.removeAttribute("hidden");
    const parameter = getLocationParm();

    var res = await fetch(API_URL + '?chara=' + parameter.name);
    const data = await res.json();
    // const data = {
    // "charas": {
    //     "ナヒーダ": {
    //         "名前": "ナヒーダ",
    //         "武器": "法器",
    //         "レアリティ": 5,
    //         "元素": "草",
    //         "国": "スメール",
    //         "身長": "低",
    //         "性別": "女",
    //         "特産素材": "カルパラタ蓮",
    //         "魔物素材": "胞子",
    //         "BOSS素材": "滅諍の蔓",
    //         "強敵素材": "傀儡の糸",
    //         "BOSS": "無相の草",
    //         "強敵": "七葉寂照秘密主",
    //         "天賦素材": "創意",
    //         "曜日": "火・金",
    //         "HoneyImpactID": "nahida_073",
    //         "魔物素材1": "キノコンの胞子",
    //         "魔物素材2": "キノコンの蛍胞子",
    //         "魔物素材3": "キノコンの晶胞子",
    //         "宝石1": "成長のエメラルド·砕屑",
    //         "宝石2": "成長のエメラルド·欠片",
    //         "宝石3": "成長のエメラルド·塊",
    //         "宝石4": "成長のエメラルド"
    //     }
    // }
    // }

    const d = data["charas"][parameter.name];
    const items = ["モラ", d["BOSS素材"], d["強敵素材"], "大英雄の経験", "冒険家の経験", "流浪者の経験", d["宝石1"], d["宝石2"], d["宝石3"], d["宝石4"],
                   d["特産素材"], d["魔物素材1"], d["魔物素材2"], d["魔物素材3"],
                   "「" + d["天賦素材"] + "」の教え", "「" + d["天賦素材"] + "」の導き", "「" + d["天賦素材"] + "」の哲学",
                   "知恵の冠"];
    res = await fetch(API_URL + '?item=' + encodeURIComponent(items.join(',')));
    const item_data = await res.json();
    // const item_data = {
    //     "items": {
    //         "成長のエメラルド·砕屑": {
    //             "名前": "成長のエメラルド·砕屑",
    //             "画像id(HoneyImpact)": "i_371",
    //             "レア度": 2,
    //             "グループ": "草",
    //             "タグ1": "キャラ突破宝石"
    //         },
    //         "成長のエメラルド·欠片": {
    //             "名前": "成長のエメラルド·欠片",
    //             "画像id(HoneyImpact)": "i_372",
    //             "レア度": 3,
    //             "グループ": "草",
    //             "タグ1": "キャラ突破宝石"
    //         },
    //         "成長のエメラルド·塊": {
    //             "名前": "成長のエメラルド·塊",
    //             "画像id(HoneyImpact)": "i_373",
    //             "レア度": 4,
    //             "グループ": "草",
    //             "タグ1": "キャラ突破宝石"
    //         },
    //         "成長のエメラルド": {
    //             "名前": "成長のエメラルド",
    //             "画像id(HoneyImpact)": "i_374",
    //             "レア度": 5,
    //             "グループ": "草",
    //             "タグ1": "キャラ突破宝石"
    //         },
    //         "滅諍の蔓": {
    //             "名前": "滅諍の蔓",
    //             "画像id(HoneyImpact)": "i_n113040",
    //             "レア度": 4,
    //             "タグ1": "キャラ突破ボス素材"
    //         },
    //         "カルパラタ蓮": {
    //             "名前": "カルパラタ蓮",
    //             "画像id(HoneyImpact)": "i_n101217",
    //             "テイワットマップid": "401",
    //             "レア度": 1,
    //             "タグ1": "キャラ突破採集素材"
    //         },
    //         "キノコンの胞子": {
    //             "名前": "キノコンの胞子",
    //             "画像id(HoneyImpact)": "i_n112059",
    //             "テイワットマップid": "221",
    //             "レア度": 1,
    //             "グループ": "胞子",
    //             "タグ1": "キャラ突破魔物素材"
    //         },
    //         "キノコンの蛍胞子": {
    //             "名前": "キノコンの蛍胞子",
    //             "画像id(HoneyImpact)": "i_n112060",
    //             "テイワットマップid": "221",
    //             "レア度": 2,
    //             "グループ": "胞子",
    //             "タグ1": "キャラ突破魔物素材"
    //         },
    //         "キノコンの晶胞子": {
    //             "名前": "キノコンの晶胞子",
    //             "画像id(HoneyImpact)": "i_n112061",
    //             "テイワットマップid": "221",
    //             "レア度": 3,
    //             "グループ": "胞子",
    //             "タグ1": "キャラ突破魔物素材"
    //         },
    //         "「創意」の教え": {
    //             "名前": "「創意」の教え",
    //             "画像id(HoneyImpact)": "i_n104332",
    //             "レア度": 2,
    //             "グループ": "創意",
    //             "タグ1": "天賦突破本"
    //         },
    //         "「創意」の導き": {
    //             "名前": "「創意」の導き",
    //             "画像id(HoneyImpact)": "i_n104333",
    //             "レア度": 3,
    //             "グループ": "創意",
    //             "タグ1": "天賦突破本"
    //         },
    //         "「創意」の哲学": {
    //             "名前": "「創意」の哲学",
    //             "画像id(HoneyImpact)": "i_n104334",
    //             "レア度": 4,
    //             "グループ": "創意",
    //             "タグ1": "天賦突破本"
    //         },
    //         "傀儡の糸": {
    //             "名前": "傀儡の糸",
    //             "画像id(HoneyImpact)": "i_n113041",
    //             "レア度": 5,
    //             "タグ1": "天賦突破強敵素材"
    //         },
    //         "知恵の冠": {
    //             "名前": "知恵の冠",
    //             "画像id(HoneyImpact)": "i_491",
    //             "レア度": 5,
    //             "タグ1": "天賦突破報酬素材"
    //         },
    //         "流浪者の経験": {
    //             "名前": "流浪者の経験",
    //             "画像id(HoneyImpact)": "i_11",
    //             "レア度": 2,
    //             "タグ1": "キャラクター経験値素材"
    //         },
    //         "冒険家の経験": {
    //             "名前": "冒険家の経験",
    //             "画像id(HoneyImpact)": "i_12",
    //             "レア度": 3,
    //             "タグ1": "キャラクター経験値素材"
    //         },
    //         "大英雄の経験": {
    //             "名前": "大英雄の経験",
    //             "画像id(HoneyImpact)": "i_13",
    //             "レア度": 4,
    //             "タグ1": "キャラクター経験値素材"
    //         },
    //         "モラ": {
    //             "名前": "モラ",
    //             "画像id(HoneyImpact)": "i_2001",
    //             "レア度": 3,
    //             "タグ1": "通貨"
    //         }
    //     }
    // }

    const resource_view = document.getElementById("resource-view");
    resource_view.querySelectorAll('#resource-view > div').forEach(n => {
        resource_view.removeChild(n);
    })
    items.forEach((k, i) => {
        const [div, div1, div2, div3] = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
        const img = document.createElement('img');
        
        img.src = "https://genshin.honeyhunterworld.com/img/" + item_data.items[k]["画像id(HoneyImpact)"] + "_70.webp";
        div.appendChild(img);

        div.appendChild(div1);

        div2.textContent = item_data.items[k]["名前"];
        div2.classList.add('item-name');
        div1.appendChild(div2);

        div3.classList.add('item-amount');
        resource_amount_element[Object.keys(resource_amount_element)[i]] = div3;
        div1.appendChild(div3);

        resource_view.appendChild(div);
    })

    /** @type {HTMLImageElement} */
    const img = document.querySelector("#charactor-bg");
    img.setAttribute('src', "https://genshin.honeyhunterworld.com/img/" + d["HoneyImpactID"] + "_gacha_splash.webp");
    const body = document.body;
    switch (d["元素"]) {
        case "炎":
            body.style.backgroundColor = '#bc4c4c';
            break
        case "草":
            body.style.backgroundColor = '#507c2b';
            break
        case "水":
            body.style.backgroundColor = '#6166c6';
            break
        case "雷":
            body.style.backgroundColor = '#8f52c0';
            break
        case "風":
            body.style.backgroundColor = '#2b7c6d';
            break
        case "岩":
            body.style.backgroundColor = '#8b6b31';
            break
        case "氷":
            body.style.backgroundColor = '#367795';
            break
        case "なし":
            body.style.backgroundColor = '#707070';
            break
    }

    changeLvTerme();
    splash.setAttribute("hidden", null);
}

const changeLvTerme = () => {
    const [chara_selector, from_level, to_level,
        talant1_from, talant1_to, talant2_from,
        talant2_to, talant3_from, talant3_to] = get_selects().map(se => parseInt(se.value));

    // init with 0
    var [mora, boss_drop, noted_drop, exp_t3, exp_t2, exp_t1, sliver, fragment, chunk, gemstone, local_element, monstor_drop_t1, monstor_drop_t2, monstor_drop_t3, talent_t1, talent_t2, talent_t3, crown] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    // exp book calcurate
    var arr = [20, 40, 50, 60, 70, 80, 90];
    arr.forEach((n, i) => {
        const v = (i == 0) ? 1 : arr[i-1];
        const min = Math.min(Math.max(from_level, v), n);
        const max = Math.min(Math.max(to_level, v), n);
        const require_exp = NEXT_LV_EXP.slice(min-1, max-1).reduce((prev, curr) => prev + curr, 0);
        exp_t3 += Math.floor(require_exp / 20000);
        exp_t2 += Math.floor((require_exp % 20000) / 5000)
        exp_t1 += Math.ceil(((require_exp % 20000) % 5000) / 1000)
    })

    mora += exp_t3 * 4000;
    mora += exp_t2 * 1000;
    mora += exp_t1 * 200;

    
    // ascend res calcurate
    arr = [20, 40, 50, 60, 70, 80];
    arr.forEach(n => {
        if (from_level <= n && n < to_level) {
            mora += ASCEND_RES[n].mora
            boss_drop += ASCEND_RES[n].boss_drop
            sliver += ASCEND_RES[n].sliver
            fragment += ASCEND_RES[n].fragment
            chunk += ASCEND_RES[n].chunk
            gemstone += ASCEND_RES[n].gemstone
            local_element += ASCEND_RES[n].material
            monstor_drop_t1 += ASCEND_RES[n].drop_t1
            monstor_drop_t2 += ASCEND_RES[n].drop_t2
            monstor_drop_t3 += ASCEND_RES[n].drop_t3
        }
    })

    // talent res calcurate
    arr = [[talant1_from, talant1_to], [talant2_from, talant2_to], [talant3_from, talant3_to]];
    arr.forEach(([f, t]) => {
        mora += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.mora, 0);
        monstor_drop_t1 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.drop_t1, 0);
        monstor_drop_t2 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.drop_t2, 0);
        monstor_drop_t3 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.drop_t3, 0);
        talent_t1 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.book_t1, 0);
        talent_t2 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.bool_t2, 0);
        talent_t3 += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.book_t3, 0);
        noted_drop += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.noted, 0);
        crown += TARENT_RES.slice(f-1, t-1).reduce((prev, curr) => prev + curr.crown, 0);
    })

    resource_amount_element.mora.textContent = mora.toString();
    if (mora == 0) resource_amount_element.mora.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.mora.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.boss_drop.textContent = boss_drop.toString();
    if (boss_drop == 0) resource_amount_element.boss_drop.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.boss_drop.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.noted_drop.textContent = noted_drop.toString();
    if (noted_drop == 0) resource_amount_element.noted_drop.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.noted_drop.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.exp_t3.textContent = exp_t3.toString();
    if (exp_t3 == 0) resource_amount_element.exp_t3.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.exp_t3.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.exp_t2.textContent = exp_t2.toString();
    if (exp_t2 == 0) resource_amount_element.exp_t2.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.exp_t2.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.exp_t1.textContent = exp_t1.toString();
    if (exp_t1 == 0) resource_amount_element.exp_t1.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.exp_t1.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.sliver.textContent = sliver.toString();
    if (sliver == 0) resource_amount_element.sliver.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.sliver.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.fragment.textContent = fragment.toString();
    if (fragment == 0) resource_amount_element.fragment.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.fragment.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.chunk.textContent = chunk.toString();
    if (chunk == 0) resource_amount_element.chunk.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.chunk.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.gemstone.textContent = gemstone.toString();
    if (gemstone == 0) resource_amount_element.gemstone.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.gemstone.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.local_element.textContent = local_element.toString();
    if (local_element == 0) resource_amount_element.local_element.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.local_element.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.monstor_drop_t1.textContent = monstor_drop_t1.toString();
    if (monstor_drop_t1 == 0) resource_amount_element.monstor_drop_t1.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.monstor_drop_t1.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.monstor_drop_t2.textContent = monstor_drop_t2.toString();
    if (monstor_drop_t2 == 0) resource_amount_element.monstor_drop_t2.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.monstor_drop_t2.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.monstor_drop_t3.textContent = monstor_drop_t3.toString();
    if (monstor_drop_t3 == 0) resource_amount_element.monstor_drop_t3.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.monstor_drop_t3.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.talent_t1.textContent = talent_t1.toString();
    if (talent_t1 == 0) resource_amount_element.talent_t1.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.talent_t1.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.talent_t2.textContent = talent_t2.toString();
    if (talent_t2 == 0) resource_amount_element.talent_t2.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.talent_t2.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.talent_t3.textContent = talent_t3.toString();
    if (talent_t3 == 0) resource_amount_element.talent_t3.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.talent_t3.parentNode.parentNode.removeAttribute('hidden');
    resource_amount_element.crown.textContent = crown.toString();
    if (crown == 0) resource_amount_element.crown.parentNode.parentNode.setAttribute('hidden', '');
    else resource_amount_element.crown.parentNode.parentNode.removeAttribute('hidden');
    
}

/**
 * 
 * @param {Element} selectElement 
 * @param {Array<String>} choices 
 */
const appendChoice = (selectElement, choices) => {
    choices.forEach(c => {
        const option = document.createElement('option');
        option.value = c;
        option.textContent = c;
        selectElement.appendChild(option);
    })
}

const get_selects = () => {
    /**@type {Array<HTMLSelectElement>} */
    const l = [];
    ["chara_selector", "from_level", "to_level", "talant1_from",
     "talant1_to", "talant2_from", "talant2_to", "talant3_from",
     "talant3_to"].forEach(id => l.push(document.querySelector("#" + id)))
    
    return l
}

const init = async () => {
    const [chara_selector, from_level, to_level,
           talant1_from, talant1_to, talant2_from,
           talant2_to, talant3_from, talant3_to] = get_selects();

    const sheetname = "DBキャラ"
    const command = "SELECT A"
    const res = await fetch(API_URL + '?query_sheetname=' + encodeURIComponent(sheetname) + "&query_command=" + encodeURIComponent(command));
    const chara_data = await res.json();
    const charas = Object.keys(chara_data.query_result)

    appendChoice(chara_selector, charas);
    appendChoice(from_level, [...Array(90)].map((_, i) => i+1))
    from_level.getElementsByTagName("option")[0].selected = true;
    appendChoice(to_level, [...Array(90)].map((_, i) => i+1))
    to_level.getElementsByTagName("option")[89].selected = true;
    appendChoice(talant1_from, [...Array(10)].map((_, i) => i+1))
    talant1_from.getElementsByTagName("option")[0].selected = true;
    appendChoice(talant1_to, [...Array(10)].map((_, i) => i+1))
    talant1_to.getElementsByTagName("option")[9].selected = true;
    appendChoice(talant2_from, [...Array(10)].map((_, i) => i+1))
    talant2_from.getElementsByTagName("option")[0].selected = true;
    appendChoice(talant2_to, [...Array(10)].map((_, i) => i+1))
    talant2_to.getElementsByTagName("option")[9].selected = true;
    appendChoice(talant3_from, [...Array(10)].map((_, i) => i+1))
    talant3_from.getElementsByTagName("option")[0].selected = true;
    appendChoice(talant3_to, [...Array(10)].map((_, i) => i+1))
    talant3_to.getElementsByTagName("option")[9].selected = true;

    chara_selector.addEventListener("change", e => {
        const url = new URL(location);
        const name = chara_selector.value;
        url.searchParams.set('name', name);
        history.pushState(null, '', url.toString())
        get_item_info();
    })

    const l = [from_level, to_level, talant1_from, talant1_to, talant2_from, talant2_to, talant3_from, talant3_to]
    const id = ["lvf", "lvt", "t1f", "t1t", "t2f", "t2t", "t3f", "t3t"];
    l.forEach((se, i) => {
        se.addEventListener("change", e => {
            const url = new URL(location);
            const name = se.value;
            url.searchParams.set(id[i], name);
            history.pushState(null, '', url.toString())
            changeLvTerme();
        })
    })

    const parms = getLocationParm();
    console.log(parms.name)
    console.log(Array.prototype.filter.call(chara_selector.getElementsByTagName("option"), o => o.value == parms.name)[0].value);
    if (parms.name != undefined) Array.prototype.filter.call(chara_selector.querySelectorAll("option"), o => o.value == parms.name)[0].selected = true;
    if (parms.lvf != undefined) Array.prototype.filter.call(from_level.querySelectorAll("option"), o => o.value == parms.lvf)[0].selected = true;
    if (parms.lvt != undefined) Array.prototype.filter.call(to_level.querySelectorAll("option"), o => o.value == parms.lvt)[0].selected = true;
    if (parms.t1f != undefined) Array.prototype.filter.call(talant1_from.querySelectorAll("option"), o => o.value == parms.t1f)[0].selected = true;
    if (parms.t1t != undefined) Array.prototype.filter.call(talant1_to.querySelectorAll("option"), o => o.value == parms.t1t)[0].selected = true;
    if (parms.t2f != undefined) Array.prototype.filter.call(talant2_from.querySelectorAll("option"), o => o.value == parms.t2f)[0].selected = true;
    if (parms.t2t != undefined) Array.prototype.filter.call(talant2_to.querySelectorAll("option"), o => o.value == parms.t2t)[0].selected = true;
    if (parms.t3f != undefined) Array.prototype.filter.call(talant3_from.querySelectorAll("option"), o => o.value == parms.t3f)[0].selected = true;
    if (parms.t3t != undefined) Array.prototype.filter.call(talant3_to.querySelectorAll("option"), o => o.value == parms.t3t)[0].selected = true;

    if (parms.name) get_item_info();
}

document.addEventListener("DOMContentLoaded", e => init());
