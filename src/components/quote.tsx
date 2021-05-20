import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
      fontFamily={'Hachi Maru Pop'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        ちょっと口下手なあなた。気になる人に婚姻届を出しましょう！<br />
        このギットハブのレポジトリをフォークして<br />
        コンフィグにあなたの情報を書いてプルリクするだけ。<br />
        ギットハブアクションズが回って、<br />
        あっという間に婚姻届ができちゃう。<br />
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://avatars.githubusercontent.com/u/9511227?v=4'
          }
          alt={'tubone24'}
          mb={2}
        />

        <Text fontWeight={600}>tubone24</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Single Engineer
        </Text>
      </Box>
    </Stack>
  );
}
