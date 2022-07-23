// import "./style.css";
import Table from "./Table";
const songs = [
    {
    title: "Tak Ingin Usai",
    artist: "Keisya Levronka",
    plays: 553888,
    },
    {
    title: "Glimpse of Us",
    artist: "Joji",
    plays: 452480,
    },
    {
    title: "Hati-Hati di Jalan",
    artist: "Tulus",
    plays: 368955,
    },
    ]

    function App(){
        return(
            <table
            style={{
                display: "flex",
                gap: 16,
                border:  4
            }}
            >
                {songs.map(function(p){
                    return(
                        <Table title={p.title} artist={p.artist} plays={p.plays} liked={p.liked} />
                    );
                })}
            </table>
        );
    }

    export default App;