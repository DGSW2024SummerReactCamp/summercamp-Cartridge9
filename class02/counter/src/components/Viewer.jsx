import '../App.css';

const Viewer = ({cnt}) => { // cnt 받아오기
    return (
        <div class='container'>
           <div>현재 카운트 :</div>
           <h1>{cnt}</h1> {/* cnt 받아온거 출력해주기 */}
        </div>
    );
};

export default Viewer;