import { useState, useEffect } from "react";
import { getAllFighters } from "../services/api";
import { Loading } from "../components/Loading";
import { FighterCard } from "../components/FighterCard";

export const Home = () => {
  const [fighters, setFighters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFighters();
  }, []);

  const fetchFighters = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllFighters();
      setFighters(data);
    } catch (err) {
      setError("No se pudieron cargar los peleadores");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setFighters(fighters.filter((f) => f.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="hero">
        <h2>🥊 Bienvenido al Ring de FFC 🥊</h2>
        <p>Descubre a los mejores combatientes del mundo</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {fighters.length === 0 ? (
        <div className="empty-state">
          <h3>No hay peleadores registrados</h3>
          <p>¡Crea tu primer peleador ahora y comienza la acción!</p>
        </div>
      ) : (
        <>
          <div style={{ maxWidth: '1400px', margin: '0 auto', paddingTop: '40px', textAlign: 'center' }}>
            <h3
              style={{
                fontSize: '36px',
                fontWeight: '900',
                letterSpacing: '-2px',
                textTransform: 'uppercase',
                color: '#000000',
                marginBottom: '10px'
              }}
            >
              {fighters.length} peleadores en acción
            </h3>
            <div style={{ height: '3px', width: '60px', backgroundColor: '#D20A0A', margin: '15px auto 30px' }}></div>
          </div>
          <div className="fighters-grid">
            {fighters.map((fighter) => (
              <FighterCard
                key={fighter.id}
                fighter={fighter}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
