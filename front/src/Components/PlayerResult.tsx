import '../Styles/playerResult.css';
import { useAppSelector } from '../app/hooks';

function PlayerResult() {

    const { playerResult } = useAppSelector(state => state.playerResult)

    return (
        <div id="playerResultGroup">
            {Object.keys(playerResult).map((key, index) => {
                return (
                    <div id={key} className='playerResultDiv'>
                        <span className="playerNoLabel">Player {key}:</span>
                        <span className="playerResultLabel">
                            {
                                Object.values(playerResult[key]).map((value, index) =>{
                                    let string = index === playerResult[key].length - 1 ? value : value + ', ';
                                    return string;
                                })
                            }
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
  
export default PlayerResult;