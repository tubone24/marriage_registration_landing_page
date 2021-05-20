import {Box, Code, Container, Heading, Stack, Text} from '@chakra-ui/react'

const Example = () => {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
                <Heading fontSize={'5xl'} fontFamily={'Nanum Brush Script'}>Let's write a YAML config!</Heading>
                <Text color={'gray.600'} fontSize={'l'} fontFamily={'Hachi Maru Pop'}>
                    YAMLファイルに夫になる人と、妻になる人の情報を書いてGitHubにPushすると...!
                </Text>
            </Stack>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'left'}>
                <Code display="block" colorScheme="pink" variant="solid" whitespace="pre" fontSize={'xs'}>
                    notification:<br />
                    year: 3<br />
                    month: 5<br />
                    day: 5<br />
                    to: 東京都小金井市<br />
                    <br />
                    husband:<br />
                    last_name: 山田<br />
                    last_name_pos: [220,590]<br />
                    last_name_kana: やまだ<br />
                    last_name_kana_pos: [221,623]<br />
                    first_name: 太郎<br />
                    first_name_pos: [300,590]<br />
                    first_name_kana: たろう<br />
                    first_name_kana_pos: [305,623]<br />
                    birth_year: 平成５<br />
                    birth_month: ５<br />
                    birth_day: ２１<br />
                    address_first: 東京都千代田区神田<br />
                    address_first_pos: [221, 545]<br />
                    address_second: ３丁目　４<br />
                    is_banchi_address: false<br />
                    address_go: １０<br />
                    address_apartment: | # 3行までであれば崩れず表現できます<br />
                    インチキタワー<br />
                    マンション<br />
                    ３６１０号室<br />
                    household_person: 山田　太郎<br />
                    legally_domiciled_first: 東京都千代田区飯田橋<br />
                    legally_domiciled_first_pos: [221, 480]<br />
                    legally_domiciled_second: ３丁目　４<br />
                    is_banchi_legally_domiciled: true<br />
                    head_of_person_of_legally_domiciled: 山田　太郎兵衛<br />
                    father_name: 山田　権左衛門<br />
                    father_name_pos: [221, 410]<br />
                    mother_name: 山田　としこ<br />
                    mother_name_pos: [221, 380]<br />
                    relationship: 長<br />
                    marital_history:<br />
                    marriage_cat: 2 # 0: 初婚 1:死別 2:離別<br />
                    year: 令和3<br />
                    month: 6<br />
                    day: 1<br />
                    job_type: 6<br />
                    <br />
                    wife:<br />
                    last_name: 貫井<br />
                    last_name_pos: [420,590]<br />
                    last_name_kana: ぬくい<br />
                    last_name_kana_pos: [421,623]<br />
                    first_name: はゆ<br />
                    first_name_pos: [502,590]<br />
                    first_name_kana: はゆ<br />
                    first_name_kana_pos: [502,623]<br />
                    birth_year: 平成7<br />
                    birth_month: 6<br />
                    birth_day: 6<br />
                    address_first: 東京都小金井市貫井北町<br />
                    address_first_pos: [422, 545]<br />
                    address_second: ３丁目　４<br />
                    is_banchi_address: false<br />
                    address_go: １０<br />
                    address_apartment: |<br />
                    ""<br />
                    household_person: 貫井　パッパ<br />
                    legally_domiciled_first: 神奈川県横浜市<br />
                    legally_domiciled_first_pos: [421, 480]<br />
                    legally_domiciled_second: ３丁目　４<br />
                    is_banchi_legally_domiciled: true<br />
                    head_of_person_of_legally_domiciled: 貫井　パッパ<br />
                    father_name: 貫井　パッパ<br />
                    father_name_pos: [421, 410]<br />
                    mother_name: 貫井　はよ<br />
                    mother_name_pos: [421, 380]<br />
                    relationship: 長<br />
                    marital_history:<br />
                    marriage_cat: 0 # 0: 初婚 1:死別 2:離別<br />
                    year: 令和３<br />
                    month: ６<br />
                    day: １<br />
                    job_type: 4<br />
                    <br />
                    new_legally_domiciled:<br />
                    is_husband_lastname: true<br />
                    address: 東京都小金井市貫井北町１丁目１<br />
                    address_pos: [251, 335]<br />
                    is_banchi_address: false<br />
                    <br />
                    to_live_together:<br />
                    year: 令和3<br />
                    month: 6<br />
                    <br />
                    national_census: # 国勢調査の年4/1-翌3/31に該当しない場合は記載不要。yearを空白文字""に<br />
                    year: 令和3<br />
                    husband_job: "03"<br />
                    wife_job: "02"<br />
                    <br />
                    other: # 旧字体{'<'}={'>'}新字体の変更などで使用。未成年婚姻のような同意欄の場合は直筆推奨で、必ず捺印を行うこと<br />
                    text: |<br />
                    ""<br />
                </Code>
            </Stack>
        </Box>
    )
}

export default Example