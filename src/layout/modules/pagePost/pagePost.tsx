import React from 'react';
import {
  Typography,
  Space,
  Button,
} from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import '../../../App.css'
import {
  postRequest,
} from "../../../requests/requests";
import {recordRequestProps} from "../../../types/recordRequestProps";

const {Title} = Typography;

const PagePost: React.FC<recordRequestProps> = ({
                                                recordRequest,
                                              }) => {
  const addEmployee = () => {
    postRequest()
    return true;
  };

  return (
    <div style={{display: 'grid'}}>
      <div className='centerTitle'>
        <Title level={3}>Post</Title>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined/>}
            onClick={() => {
              addEmployee()
              recordRequest('https://httpbin.org/post')
            }}
          >
            Отправить
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default PagePost;