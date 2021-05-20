import {Box, Code, Container, Heading, Stack, Text} from '@chakra-ui/react'
import { CopyBlock, dracula } from "react-code-blocks";

const yamlText = `notification:
  year: 3
  month: 5
  day: 5
  to: 東京都小金井市

husband:
  last_name: 山田
  last_name_pos: [220,590]
  last_name_kana: やまだ
  last_name_kana_pos: [221,623]
  first_name: 太郎
  first_name_pos: [300,590]
  first_name_kana: たろう
  first_name_kana_pos: [305,623]
  birth_year: 平成５
  birth_month: ５
  birth_day: ２１
  address_first: 東京都千代田区神田
  address_first_pos: [221, 545]
  address_second: ３丁目　４
  is_banchi_address: false
  address_go: １０
  address_apartment: | # 3行までであれば崩れず表現できます
    インチキタワー
    マンション
    ３６１０号室
  household_person: 山田　太郎
  legally_domiciled_first: 東京都千代田区飯田橋
  legally_domiciled_first_pos: [221, 480]
  legally_domiciled_second: ３丁目　４
  is_banchi_legally_domiciled: true
  head_of_person_of_legally_domiciled: 山田　太郎兵衛
  father_name: 山田　権左衛門
  father_name_pos: [221, 410]
  mother_name: 山田　としこ
  mother_name_pos: [221, 380]
  relationship: 長
  marital_history:
    marriage_cat: 2 # 0: 初婚 1:死別 2:離別
    year: 令和3
    month: 6
    day: 1
  job_type: 6

wife:
  last_name: 貫井
  last_name_pos: [420,590]
  last_name_kana: ぬくい
  last_name_kana_pos: [421,623]
  first_name: はゆ
  first_name_pos: [502,590]
  first_name_kana: はゆ
  first_name_kana_pos: [502,623]
  birth_year: 平成7
  birth_month: 6
  birth_day: 6
  address_first: 東京都小金井市貫井北町
  address_first_pos: [422, 545]
  address_second: ３丁目　４
  is_banchi_address: false
  address_go: １０
  address_apartment: |
    ""
  household_person: 貫井　パッパ
  legally_domiciled_first: 神奈川県横浜市
  legally_domiciled_first_pos: [421, 480]
  legally_domiciled_second: ３丁目　４
  is_banchi_legally_domiciled: true
  head_of_person_of_legally_domiciled: 貫井　パッパ
  father_name: 貫井　パッパ
  father_name_pos: [421, 410]
  mother_name: 貫井　はよ
  mother_name_pos: [421, 380]
  relationship: 長
  marital_history:
    marriage_cat: 0 # 0: 初婚 1:死別 2:離別
    year: 令和３
    month: ６
    day: １
  job_type: 4

new_legally_domiciled:
  is_husband_lastname: true
  address: 東京都小金井市貫井北町１丁目１
  address_pos: [251, 335]
  is_banchi_address: false

to_live_together:
  year: 令和3
  month: 6

national_census: # 国勢調査の年4/1-翌3/31に該当しない場合は記載不要。yearを空白文字""に
  year: 令和3
  husband_job: "03"
  wife_job: "02"

other: # 旧字体<=>新字体の変更などで使用。未成年婚姻のような同意欄の場合は直筆推奨で、必ず捺印を行うこと
  text: |
    ""`

const Example = () => {
    return (
        <Box p={4} bgGradient="linear(to-r, blue.200, pink.500)">
            <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
                <Heading fontSize={'xl'} fontFamily={'Hachi Maru Pop'}>YAMLファイルに夫になる人と、妻になる人の情報を書いてGitHubにPushするだけ！</Heading>
            </Stack>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'left'} py={6}>
                <CopyBlock
                    language={'yaml'}
                    text={yamlText}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </Stack>
        </Box>
    )
}

export default Example