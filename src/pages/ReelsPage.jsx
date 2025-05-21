import Redirect from "../components/Redirect";
import backReels from '../assets/post/back_reels.jpg';

function ReelsPage() {
  return (
    <div>
      <Redirect page="Reels" backImg={backReels}/>
    </div>
  )
}

export default ReelsPage;
