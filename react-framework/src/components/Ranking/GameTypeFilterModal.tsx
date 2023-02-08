import quitIcon from '@/assets/icons/exit.png'

interface Iprops {
  setGameType: (props: string) => void,
  setFilterModal: (props: string) => void,
  sportsType: string
}

export default function GameTypeFilterModal({ setGameType, setFilterModal, sportsType }: Iprops) {
  const handleSportsTypeClick = (gameType: string) => {
    setGameType(gameType);
    setFilterModal('none');
  }
  return (
    <div className="absolute w-full h-full bottom-0 bg-black/50 z-20">
      <div className="absolute w-full bottom-55 bg-white z-30">
        <img className="absolute w-10 h-10 top-18 right-18" src={quitIcon} onClick={() => setFilterModal('none')}></img>
        <div className="w-full h-47 text-15 border-b-1 border-gray-600 flex justify-center items-center">게임 종류</div>
        {sportsType === '농구' &&
          <div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('3 vs 3')}>3 vs 3</div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('5 vs 5')}>5 vs 5</div>
          </div>}
        {sportsType === '축구' &&
          <div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('5 vs 5')}>5 vs 5</div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('6 vs 6')}>6 vs 6</div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('11 vs 11')}>11 vs 11</div>
          </div>}
        {sportsType === '배드민턴' &&
          <div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('1 vs 1')}>1 vs 1</div>
            <div className="w-full h-47 text-15 border-b-1 pl-17 border-gray-600 flex items-center" onClick={() => handleSportsTypeClick('2 vs 2')}>2 vs 2</div>
          </div>}
      </div>
    </div>
  )
}