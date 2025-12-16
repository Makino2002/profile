import "./Home.css";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";

export default function Home() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://profile-1-ybbp.onrender.com/health")
      .then((res) => res.json())
      .then((data) => {
        console.log("Health:", data);
        setHealthStatus(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = () => {
    alert("Xin chào! Bạn đã click vào button");
  };

  return (
    <div className="home">
      <PageHeader title="Home" subtitle="Xin chào! 👋" />
      <Section title="Thông tin" description="Đây là trang Home của bạn">
        {loading ? (
          <p className="status">Đang kiểm tra kết nối...</p>
        ) : healthStatus ? (
          <p className="status success">✓ Server: {healthStatus.status}</p>
        ) : (
          <p className="status error">✗ Không thể kết nối server</p>
        )}
        <button onClick={handleButtonClick} className="btn">
          Click vào tôi
        </button>
      </Section>
    </div>
  );
}
