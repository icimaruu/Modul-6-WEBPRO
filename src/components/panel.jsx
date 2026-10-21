function panel(props) {
    return (
        <div className="panel">
            <p>{props.children}</p>
            <p>{props.judul}</p>
        </div>
    );
}

export default panel