import {
  useColorModeValue,
  Flex,
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
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
        <div style={{
          height: '750px',
          width: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <Viewer fileUrl="/sample.pdf" />
        </div>
      </Worker>
    </Flex>
  );
}

export default Pdf
