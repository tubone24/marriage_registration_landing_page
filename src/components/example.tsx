import { Code } from '@chakra-ui/react'

const Example = () => {
    return <Code display="block" whitespace="pre" children={
        'notification:\n' +
        '  year: 3\n' +
        '  month: 5\n' +
        '  day: 5\n' +
        '  to: 東京都小金井市\n' +
        '\n' +
        'husband:\n' +
        '  last_name: 山田\n' +
        '  last_name_pos: [220,590]\n' +
        '  last_name_kana: やまだ\n' +
        '  last_name_kana_pos: [221,623]\n' +
        '  first_name: 太郎\n' +
        '  first_name_pos: [300,590]\n' +
        '  first_name_kana: たろう\n' +
        '  first_name_kana_pos: [305,623]\n' +
        '  birth_year: 平成５\n' +
        '  birth_month: ５\n' +
        '  birth_day: ２１\n' +
        '  address_first: 東京都千代田区神田\n' +
        '  address_first_pos: [221, 545]\n' +
        '  address_second: ３丁目　４\n' +
        '  is_banchi_address: false\n' +
        '  address_go: １０\n' +
        '  address_apartment: | # 3行までであれば崩れず表現できます\n' +
        '    インチキタワー\n' +
        '    マンション\n' +
        '    ３６１０号室\n' +
        '  household_person: 山田　太郎\n' +
        '  legally_domiciled_first: 東京都千代田区飯田橋\n' +
        '  legally_domiciled_first_pos: [221, 480]\n' +
        '  legally_domiciled_second: ３丁目　４\n' +
        '  is_banchi_legally_domiciled: true\n' +
        '  head_of_person_of_legally_domiciled: 山田　太郎兵衛\n' +
        '  father_name: 山田　権左衛門\n' +
        '  father_name_pos: [221, 410]\n' +
        '  mother_name: 山田　としこ\n' +
        '  mother_name_pos: [221, 380]\n' +
        '  relationship: 長\n' +
        '  marital_history:\n' +
        '    marriage_cat: 2 # 0: 初婚 1:死別 2:離別\n' +
        '    year: 令和3\n' +
        '    month: 6\n' +
        '    day: 1\n' +
        '  job_type: 6\n' +
        '\n' +
        'wife:\n' +
        '  last_name: 貫井\n' +
        '  last_name_pos: [420,590]\n' +
        '  last_name_kana: ぬくい\n' +
        '  last_name_kana_pos: [421,623]\n' +
        '  first_name: はゆ\n' +
        '  first_name_pos: [502,590]\n' +
        '  first_name_kana: はゆ\n' +
        '  first_name_kana_pos: [502,623]\n' +
        '  birth_year: 平成7\n' +
        '  birth_month: 6\n' +
        '  birth_day: 6\n' +
        '  address_first: 東京都小金井市貫井北町\n' +
        '  address_first_pos: [422, 545]\n' +
        '  address_second: ３丁目　４\n' +
        '  is_banchi_address: false\n' +
        '  address_go: １０\n' +
        '  address_apartment: |\n' +
        '    ""\n' +
        '  household_person: 貫井　パッパ\n' +
        '  legally_domiciled_first: 神奈川県横浜市\n' +
        '  legally_domiciled_first_pos: [421, 480]\n' +
        '  legally_domiciled_second: ３丁目　４\n' +
        '  is_banchi_legally_domiciled: true\n' +
        '  head_of_person_of_legally_domiciled: 貫井　パッパ\n' +
        '  father_name: 貫井　パッパ\n' +
        '  father_name_pos: [421, 410]\n' +
        '  mother_name: 貫井　はよ\n' +
        '  mother_name_pos: [421, 380]\n' +
        '  relationship: 長\n' +
        '  marital_history:\n' +
        '    marriage_cat: 0 # 0: 初婚 1:死別 2:離別\n' +
        '    year: 令和３\n' +
        '    month: ６\n' +
        '    day: １\n' +
        '  job_type: 4\n' +
        '\n' +
        'new_legally_domiciled:\n' +
        '  is_husband_lastname: true\n' +
        '  address: 東京都小金井市貫井北町１丁目１\n' +
        '  address_pos: [251, 335]\n' +
        '  is_banchi_address: false\n' +
        '\n' +
        'to_live_together:\n' +
        '  year: 令和3\n' +
        '  month: 6\n' +
        '\n' +
        'national_census: # 国勢調査の年4/1-翌3/31に該当しない場合は記載不要。yearを空白文字""に\n' +
        '  year: 令和3\n' +
        '  husband_job: "03"\n' +
        '  wife_job: "02"\n' +
        '\n' +
        'other: # 旧字体<=>新字体の変更などで使用。未成年婚姻のような同意欄の場合は直筆推奨で、必ず捺印を行うこと\n' +
        '  text: |\n' +
        '    ""'
    }>
    </Code>
}

export default Example