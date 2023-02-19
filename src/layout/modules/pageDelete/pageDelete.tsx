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
  deleteRequest,
} from "../../../requests/requests";
import {recordRequestProps} from "../../../types/recordRequestProps";

const {Title} = Typography;

const PageDelete: React.FC<recordRequestProps> = ({
                                                  recordRequest,
                                                }) => {
  const addEmployee = () => {
    deleteRequest().then(()=> message.success('Запрос отправлен'))
    return true;
  };

  return (
    <div style={{display: 'grid'}}>
      <div className='centerTitle'>
        <Title level={3}>Delete</Title>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined/>}
            onClick={()=> {
              addEmployee()
              recordRequest('https://httpbin.org/delete')
            }}
          >
            Отправить
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default PageDelete;