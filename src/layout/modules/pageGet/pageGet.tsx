import React from 'react';
import {
  Typography,
  Space,
  Button,
  message,
} from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import '../../../App.css'
import {
  getRequest,
} from "../../../requests/requests";
import {recordRequestProps} from "../../../types/recordRequestProps";

const {Title} = Typography;

const PageGet: React.FC<recordRequestProps> = ({
                                               recordRequest,
                                         }) => {
  const addEmployee = () => {
    getRequest().then(()=> message.success('Запрос отправлен'))
    return true;
  };

  return (
    <div style={{display: 'grid'}}>
      <div className='centerTitle'>
        <Title level={3}>Get</Title>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined/>}
            onClick={ () => {
              addEmployee()
              recordRequest('https://httpbin.org/get')
            }}
          >
            Отправить
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default PageGet;