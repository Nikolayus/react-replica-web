import rute from '../../images/description-2-app.png';
import './style.css'
function Principal() {
    const image = rute;
    console.log (image)

    return (
        <div className='Principal'>
            <div className='left'>
                <button>scredure</button>
                <button>Trancking</button> <br />
                <button>Organize</button>
            </div>
            <div className='text'>
                <p>Schedule talks to keep track of treir completion.Sync <br />
                    provides multiple scheduling option including alarms and <br />
                    reminders</p>

                <ul>
                    <li>You can always add new talks or change the setting of <br />
                        existing ones in your calendar view or the app control <br />
                        panel</li>

                    <li>It's easy to stay focused on most important daily <br />
                        activities that will get you closer to meeting your goals <br />
                    </li>

                    <li>Use phone reminders to free up your long term memory <br />
                        which will reduce stress and make you more productive</li>
                </ul>
            </div>
            <div className='imagen'>
                <img src="src\images\description-2-app.png" alt="imagen" />
            </div>
            <div className='botones'>
                <button>TERMS</button>
                <button><strong>PRIVACY</strong></button>
            </div>
        </div>
    );
}

export default Principal








