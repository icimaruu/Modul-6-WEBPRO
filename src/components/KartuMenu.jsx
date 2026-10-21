function KartuMenu(props) {
    return (
        <div className="CardMenu">
            <h3>{props.nama}</h3>
            <p>{props.kategori}</p>
            <p>{props.harga}</p>
        </div>
    );
}

export default KartuMenu