import { Link } from "react-router-dom";
import { deleteFighter } from "../services/api";

export const FighterCard = ({ fighter, onDelete }) => {
  const handleDelete = async () => {
    if (
      window.confirm(
        `¿Estás seguro de que deseas eliminar a ${fighter.nombre}?`,
      )
    ) {
      try {
        await deleteFighter(fighter.id);
        onDelete(fighter.id);
        alert("Peleador eliminado exitosamente");
      } catch (error) {
        alert("Error al eliminar el peleador");
      }
    }
  };

  return (
    <div className="fighter-card">
      <div className="fighter-card-header">
        <h3 className="fighter-name">{fighter.nombre}</h3>
        <span className="fighter-badge">{fighter.estilo}</span>
      </div>

      <div className="fighter-info">
        <div className="fighter-stat">
          <span className="fighter-stat-label">País</span>
          <span className="fighter-stat-value">{fighter.pais || "N/A"}</span>
        </div>
        <div className="fighter-stat">
          <span className="fighter-stat-label">ID</span>
          <span className="fighter-stat-value">#{fighter.id}</span>
        </div>
      </div>

      <div className="fighter-record">
        <div className="record-item">
          <span className="record-item-value">{fighter.victorias}</span>
          <span className="record-item-label">Victorias</span>
        </div>
        <div className="record-item">
          <span className="record-item-value">{fighter.derrotas}</span>
          <span className="record-item-label">Derrotas</span>
        </div>
      </div>

      <div className="fighter-actions">
        <Link
          to={`/peleador/${fighter.id}`}
          className="btn btn-primary btn-small"
        >
          Ver Detalle
        </Link>
        <Link
          to={`/editar/${fighter.id}`}
          className="btn btn-secondary btn-small"
        >
          Editar
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-secondary btn-small"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
