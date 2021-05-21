import {
    useColorModeValue,
    Flex, Text, Stack, Button, Box
} from '@chakra-ui/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const Pdf = (): JSX.Element => {

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')} bgGradient="linear(to-r, gray.200, pink.500)">
      <Stack spacing={6} w={'full'} maxW={'lg'}>
      <Text color={'gray.600'} p={6} fontSize={'lg'} fontFamily={'Hachi Maru Pop'} >
        婚姻届も継続的インテグレーション・デリバリーしたい！ <br /><br />
        幸せをYAMLで書きたい！<br /><br />
        ソフトウェアエンジニアと結婚したい！<br /><br /><br /><br />
        そんな悩みを解決します！
      </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} p={6}>
              <a href="https://github.com/tubone24/marriage_registration/fork">
              <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  fontFamily={'Nanum Pen Script'}
                  _hover={{
                      bg: 'blue.500',
                  }}>
                  Create your marriage registration!!
              </Button>
              </a>
              <a href="https://github.com/tubone24/marriage_registration">
              <Button rounded={'full'} fontFamily={'Nanum Pen Script'}>Looking out!!</Button>
              </a>
          </Stack>
      </Stack>
        <Box>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
                <div style={{
                    height: '650px',
                    width: '1000px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <Viewer fileUrl="/sample.pdf" />
                </div>
            </Worker>
        </Box>
    </Flex>
  );
}

export default Pdf
