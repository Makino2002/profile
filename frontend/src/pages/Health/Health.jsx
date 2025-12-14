import { useEffect, useState } from "react";
import "./Health.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";

export default function Health() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/health")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="health-container">
      <PageHeader title="Health" subtitle="Health Check" />
      <Section title="Trạng thái hệ thống" description="Kết quả từ API /health">
        {loading && <p className="loading">Đang kiểm tra...</p>}

        {error && <p className="error">❌ Lỗi: {error}</p>}

        {data && (
          <div className="health-info">
            <div className="status-badge success">✓ {data.status}</div>
            <p className="message">{data.message}</p>
            <p className="timestamp">
              Thời gian: {new Date(data.timestamp).toLocaleString()}
            </p>

            <div className="json-display">
              <h3>Response:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        )}

        <button
          onClick={() => window.location.reload()}
          className="refresh-btn"
        >
          🔄 Refresh
        </button>
      </Section>
    </div>
  );
}
