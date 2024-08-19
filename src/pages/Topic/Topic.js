import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import { getListTopic } from "../../service/topicService";
import "./Topic.scss"; // Đảm bảo bạn đã tạo file CSS này để tùy chỉnh

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      console.log("response", response);
      setTopics(response);
    };
    fetchApi();
  }, []);

  return (
    <Container className="my-4">
      <h2 className="mb-4">Danh sách chủ đề</h2>
      {topics.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ đề</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Button as={Link} to={"/quiz/" + item.id} variant="primary">
                    Làm bài
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Chưa có chủ đề nào.</p>
      )}
    </Container>
  );
}

export default Topic;
