import LabelHarga from "./LabelHarga";

function KartuMenu(props) {
    return (
        <div className="CardMenu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga>nilai = {harga}</LabelHarga>
        </div>
    );
}

export default KartuMenu