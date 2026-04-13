import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFighterById } from "../services/api";
import { Loading } from "../components/Loading";

export const FighterDetail = () => {
  const { id } = useParams();
  const [fighter, setFighter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFighter();
  }, [id]);

  const fetchFighter = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFighterById(id);
      setFighter(data);
    } catch (err) {
      setError("No se pudo cargar el peleador");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!fighter) {
    return (
      <main>
        <div className="error-message">Peleador no encontrado</div>
        <Link to="/" className="btn btn-primary">
          Volver al Home
        </Link>
      </main>
    );
  }

  const winRatio =
    fighter.victorias + fighter.derrotas > 0
      ? (
          (fighter.victorias / (fighter.victorias + fighter.derrotas)) *
          100
        ).toFixed(1)
      : 0;

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', marginTop: '80px', padding: '60px 40px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link
          to="/"
          className="btn btn-secondary"
          style={{ marginBottom: '40px', display: 'inline-block' }}
        >
          ← Volver
        </Link>

        <div style={{ backgroundColor: '#EEEEEE', padding: '60px 40px', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '900',
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: '10px'
          }}>
            {fighter.nombre}
          </h2>
          <div style={{ height: '3px', width: '60px', backgroundColor: '#D20A0A', marginBottom: '20px' }}></div>
          <p style={{
            fontSize: '18px',
            fontWeight: '400',
            color: '#222222',
            letterSpacing: '1px'
          }}>
            {fighter.estilo} • {fighter.pais}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ backgroundColor: '#EEEEEE', padding: '30px 20px', textAlign: 'center', borderLeft: '4px solid #D20A0A' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#222222', marginBottom: '10px' }}>Victorias</div>
            <div style={{ fontSize: '40px', fontWeight: '900', color: '#D20A0A' }}>{fighter.victorias}</div>
          </div>
          <div style={{ backgroundColor: '#EEEEEE', padding: '30px 20px', textAlign: 'center', borderLeft: '4px solid #D20A0A' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#222222', marginBottom: '10px' }}>Derrotas</div>
            <div style={{ fontSize: '40px', fontWeight: '900', color: '#D20A0A' }}>{fighter.derrotas}</div>
          </div>
          <div style={{ backgroundColor: '#EEEEEE', padding: '30px 20px', textAlign: 'center', borderLeft: '4px solid #D20A0A' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#222222', marginBottom: '10px' }}>% Victorian</div>
            <div style={{ fontSize: '40px', fontWeight: '900', color: '#D20A0A' }}>{winRatio}%</div>
          </div>
        </div>

        <div
          style={{
            background: '#F5F5F5',
            padding: '30px',
            border: '1px solid #D20A0A',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontSize: '16px',
            color: '#222222',
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            Récord: {fighter.victorias}W - {fighter.derrotas}L
          </p>
          <p style={{ fontSize: '14px', color: '#000000', fontWeight: '400' }}>
            ID del Peleador: <strong>#{fighter.id}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to={`/editar/${fighter.id}`} className="btn btn-primary">
            Editar Perfil
          </Link>
          <Link to="/" className="btn btn-secondary">
            Volver al Roster
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FighterDetail;
