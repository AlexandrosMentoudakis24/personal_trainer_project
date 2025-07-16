const QualificationsCard = ({
  qualificationText,
}: {
  qualificationText: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl bg-statisticsCardBgColor p-[15px]">
      <span className="text-4xl font-bold text-statisticsCardPrimaryTextColor">
        {qualificationText}
      </span>
    </div>
  );
};

export default QualificationsCard;
