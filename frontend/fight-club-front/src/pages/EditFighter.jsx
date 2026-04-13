import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getFighterById, updateFighter } from "../services/api";
import { Loading } from "../components/Loading";

const FIGHTING_STYLES = [
  "MMA",
  "Boxeo",
  "Sambo",
  "Muay Thai",
  "Jiu-Jitsu",
  "Karate",
  "Kickboxing",
  "Lucha",
  "Jeet Kune Do",
  "Tang Soo Do",
  "Wushu",
  "Hapkido",
  "Wing Chun",
  "Taekwondo",
];

export const EditFighter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetchFighter();
  }, [id]);

  const fetchFighter = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFighterById(id);
      setFormData(data);
    } catch (err) {
      setError("No se pudo cargar el peleador");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "victorias" || name === "derrotas"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setError("El nombre es requerido");
      return;
    }

    try {
      setUpdating(true);
      setError(null);
      setSuccess(null);

      await updateFighter(id, {
        nombre: formData.nombre.trim(),
        estilo: formData.estilo,
        pais: formData.pais.trim(),
        victorias: formData.victorias,
        derrotas: formData.derrotas,
      });

      setSuccess("¡Peleador actualizado exitosamente! 🥊");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Error al actualizar el peleador",
      );
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!formData) {
    return (
      <main>
        <div className="error-message">Peleador no encontrado</div>
        <Link to="/" className="btn btn-primary">
          Volver al Home
        </Link>
      </main>
    );
  }

  return (
    <main>
      <div className="hero">
        <h2>✏️ Editar Peleador ✏️</h2>
        <p>Actualiza la información de {formData.nombre}</p>
      </div>

      <div className="form-container">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre del Peleador</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estilo">Estilo de Combate</label>
            <select
              id="estilo"
              name="estilo"
              value={formData.estilo}
              onChange={handleChange}
            >
              {FIGHTING_STYLES.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pais">País</label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="victorias">Victorias</label>
              <input
                type="number"
                id="victorias"
                name="victorias"
                min="0"
                value={formData.victorias}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="derrotas">Derrotas</label>
              <input
                type="number"
                id="derrotas"
                name="derrotas"
                min="0"
                value={formData.derrotas}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={updating}
              style={{ flex: 1 }}
            >
              {updating ? "Actualizando..." : "Actualizar Peleador"}
            </button>
            <Link
              to="/"
              className="btn btn-secondary"
              style={{ flex: 1, textAlign: "center" }}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditFighter;
