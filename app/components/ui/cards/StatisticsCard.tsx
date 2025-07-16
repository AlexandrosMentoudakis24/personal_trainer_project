import { StatisticsCardType } from "@/app/types/StatisticsCardType";

const StatisticsCard = ({ cardInfos }: { cardInfos: StatisticsCardType }) => {
  return (
    <div className="flex flex-col font-bold justify-center items-center rounded-xl bg-statisticsCardBgColor p-[15px] gap-y-[15px]">
      <span className="text-5xl text-statisticsCardPrimaryTextColor">
        {cardInfos.primaryText}
      </span>
      <span className="text-xl text-statisticsCardSecondaryTextColor tracking-wide">
        {cardInfos.secondaryText}
      </span>
    </div>
  );
};

export default StatisticsCard;
