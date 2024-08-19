import React, { useEffect, useState } from 'react';
import { getAnswerByUserId } from '../../service/answerService';
import { getListTopic } from '../../service/topicService';
import { Link } from 'react-router-dom';
import { Table, Container, Button } from 'react-bootstrap';
import './Answers.scss'; // Đảm bảo bạn có file CSS để tùy chỉnh

function Answers() {
  const [dataAnswer, setDataAnswer] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const answerByUserId = await getAnswerByUserId();
        setDataAnswer(answerByUserId);
        console.log("answerByUserId", answerByUserId);

        const topicList = await getListTopic();
        setTopics(topicList);
        console.log("topic", topicList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApi();
  }, []);

  const getTopicNameById = (id) => {
    const topic = topics.find(topic => topic.id === id);
    return topic ? topic.name : 'Unknown';
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Danh sách bài đã luyện tập</h2>
      {dataAnswer.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên chủ đề</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataAnswer.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{getTopicNameById(item.topicId)}</td>
                <td>
                  <Button as={Link} to={`/result/${item.id}`} variant="primary">
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Chưa có dữ liệu nào để hiển thị.</p>
      )}
    </Container>
  );
}

export default Answers;
