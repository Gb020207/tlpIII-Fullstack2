import { useState, useEffect } from "react";
import { getAllFighters, deleteFighter } from "../services/api";
import { FighterCard } from "../components/FighterCard";
import { Loading } from "../components/Loading";

const Fighters = () => {
  const [fighters, setFighters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFighters();
  }, []);

  const fetchFighters = async () => {
    try {
      setLoading(true);
      const response = await getAllFighters();
      setFighters(response);
    } catch (err) {
      setError("Error al cargar peleadores");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteFighter(id);
    setFighters(fighters.filter((f) => f.id !== id));
  };

  if (loading) return <Loading />;

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ marginTop: '80px', paddingTop: '60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '40px', textAlign: 'center', borderBottom: '2px solid #EEEEEE' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '900',
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: '15px'
          }}>
            Todos los Peleadores
          </h1>
          <div style={{ height: '4px', width: '80px', backgroundColor: '#D20A0A', margin: '15px auto 20px' }}></div>
          <p style={{ fontSize: '16px', color: '#222222', letterSpacing: '1px' }}>El roster completo de la FFC</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        {fighters.length === 0 ? (
          <div className="empty-state">
            <h3>No hay peleadores registrados</h3>
          </div>
        ) : (
          <div className="fighters-grid">
            {fighters.map((fighter) => (
              <FighterCard
                key={fighter.id}
                fighter={fighter}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Fighters;
