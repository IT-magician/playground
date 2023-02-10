import CheckBox from "./CheckBox";

interface ClassNameProps {
    userId: number;
    className: string;
    imageSrc: string;
    imageSize: string;
    nickname: string;
    isSelected: boolean;
    isRecent: boolean;
    onClick?: any;
}

export default function ProfileCard({ userId, className, imageSrc, imageSize, nickname, isSelected, isRecent, onClick }: ClassNameProps) {
    return (
        <div
            className={className}
        >
            <div className="flex">
                <img src={imageSrc} className={imageSize + " rounded-26 self-center"} />
                <div className="flex flex-col ml-15 my-15 h-35 justify-center ">
                    <h2 className="text-15 font-inter">{nickname}</h2>
                </div>
            </div>
            <CheckBox className="flex ml-15 mr-24 w-19 h-19 border-2 rounded-20 self-center" userId={userId} imageSrc={imageSrc} nickname={nickname} isSelected={isSelected} isRecent={isRecent} onClick={onClick} />
        </div>
    )
}