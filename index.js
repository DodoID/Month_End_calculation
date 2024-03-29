// dataset provided with the excerise for Week 4
const dataset = [
  { Date: "Jan-2010", "Profit/Losses": 867884 },
  { Date: "Feb-2010", "Profit/Losses": 984655 },
  { Date: "Mar-2010", "Profit/Losses": 322013 },
  { Date: "Apr2010", "Profit/Losses": -69417 },
  { Date: "May-2010", "Profit/Losses": 310503 },
  { Date: "Jun-2010", "Profit/Losses": 522857 },
  { Date: "Jul-2010", "Profit/Losses": 1033096 },
  { Date: "Aug-2010", "Profit/Losses": 604885 },
  { Date: "Sep-2010", "Profit/Losses": -216386 },
  { Date: "Oct-2010", "Profit/Losses": 477532 },
  { Date: "Nov-2010", "Profit/Losses": 893810 },
  { Date: "Dec-2010", "Profit/Losses": -80353 },
  { Date: "Jan-2011", "Profit/Losses": 779806 },
  { Date: "Feb-2011", "Profit/Losses": -335203 },
  { Date: "Mar-2011", "Profit/Losses": 697845 },
  { Date: "Apr-2011", "Profit/Losses": 793163 },
  { Date: "May-2011", "Profit/Losses": 485070 },
  { Date: "Jun-2011", "Profit/Losses": 584122 },
  { Date: "Jul-2011", "Profit/Losses": 62729 },
  { Date: "Aug-2011", "Profit/Losses": 668179 },
  { Date: "Sep-2011", "Profit/Losses": 899906 },
  { Date: "Oct-2011", "Profit/Losses": 834719 },
  { Date: "Nov-2011", "Profit/Losses": 132003 },
  { Date: "Dec-2011", "Profit/Losses": 309978 },
  { Date: "Jan-2012", "Profit/Losses": -755566 },
  { Date: "Feb-2012", "Profit/Losses": 1170593 },
  { Date: "Mar-2012", "Profit/Losses": 252788 },
  { Date: "Apr-2012", "Profit/Losses": 1151518 },
  { Date: "May-2012", "Profit/Losses": 817256 },
  { Date: "Jun-2012", "Profit/Losses": 570757 },
  { Date: "Jul-2012", "Profit/Losses": 506702 },
  { Date: "Aug-2012", "Profit/Losses": -1022534 },
  { Date: "Sep-2012", "Profit/Losses": 475062 },
  { Date: "Oct-2012", "Profit/Losses": 779976 },
  { Date: "Nov-2012", "Profit/Losses": 144175 },
  { Date: "Dec-2012", "Profit/Losses": 542494 },
  { Date: "Jan-2013", "Profit/Losses": 359333 },
  { Date: "Feb-2013", "Profit/Losses": 321469 },
  { Date: "Mar-2013", "Profit/Losses": 67780 },
  { Date: "Apr-2013", "Profit/Losses": 471435 },
  { Date: "May-2013", "Profit/Losses": 565603 },
  { Date: "Jun-2013", "Profit/Losses": 872480 },
  { Date: "Jul-2013", "Profit/Losses": 789480 },
  { Date: "Aug-2013", "Profit/Losses": 999942 },
  { Date: "Sep-2013", "Profit/Losses": -1196225 },
  { Date: "Oct-2013", "Profit/Losses": 268997 },
  { Date: "Nov-2013", "Profit/Losses": -687986 },
  { Date: "Dec-2013", "Profit/Losses": 1150461 },
  { Date: "Jan-2014", "Profit/Losses": 682458 },
  { Date: "Feb-2014", "Profit/Losses": 617856 },
  { Date: "Mar-2014", "Profit/Losses": 824098 },
  { Date: "Apr-2014", "Profit/Losses": 581943 },
  { Date: "May-2014", "Profit/Losses": 132864 },
  { Date: "Jun-2014", "Profit/Losses": 448062 },
  { Date: "Jul-2014", "Profit/Losses": 689161 },
  { Date: "Aug-2014", "Profit/Losses": 800701 },
  { Date: "Sep-2014", "Profit/Losses": 1166643 },
  { Date: "Oct-2014", "Profit/Losses": 947333 },
  { Date: "Nov-2014", "Profit/Losses": 578668 },
  { Date: "Dec-2014", "Profit/Losses": 988505 },
  { Date: "Jan-2015", "Profit/Losses": 1139715 },
  { Date: "Feb-2015", "Profit/Losses": 1029471 },
  { Date: "Mar-2015", "Profit/Losses": 687533 },
  { Date: "Apr-2015", "Profit/Losses": -524626 },
  { Date: "May-2015", "Profit/Losses": 158620 },
  { Date: "Jun-2015", "Profit/Losses": 87795 },
  { Date: "Jul-2015", "Profit/Losses": 423389 },
  { Date: "Aug-2015", "Profit/Losses": 840723 },
  { Date: "Sep-2015", "Profit/Losses": 568529 },
  { Date: "Oct-2015", "Profit/Losses": 332067 },
  { Date: "Nov-2015", "Profit/Losses": 989499 },
  { Date: "Dec-2015", "Profit/Losses": 778237 },
  { Date: "Jan-2016", "Profit/Losses": 650000 },
  { Date: "Feb-2016", "Profit/Losses": -1100387 },
  { Date: "Mar-2016", "Profit/Losses": -174946 },
  { Date: "Apr-2016", "Profit/Losses": 757143 },
  { Date: "May-2016", "Profit/Losses": 445709 },
  { Date: "Jun-2016", "Profit/Losses": 712961 },
  { Date: "Jul-2016", "Profit/Losses": -1163797 },
  { Date: "Aug-2016", "Profit/Losses": 569899 },
  { Date: "Sep-2016", "Profit/Losses": 768450 },
  { Date: "Oct-2016", "Profit/Losses": 102685 },
  { Date: "Nov-2016", "Profit/Losses": 795914 },
  { Date: "Dec-2016", "Profit/Losses": 60988 },
  { Date: "Jan-2017", "Profit/Losses": 138230 },
  { Date: "Feb-2017", "Profit/Losses": 671099 },
];

// variables initilising and adding to the total values to be used later
let totalMonths = dataset.length;
let totalProfitLosses = 0;
let previousMonthValue = dataset[0]["Profit/Losses"];
let totalChange = 0;
let greatestIncrease = { Date: "", Amount: 0 };
let greatestDecrease = { Date: "", Amount: 0 };

// dataset processing comands to calculate the total values and the average change per month
dataset.forEach((record, index) => {
  totalProfitLosses += record["Profit/Losses"];

  if (index > 0) {
      let monthlyChange = record["Profit/Losses"] - previousMonthValue;
      totalChange += monthlyChange;

      // Check for maximum increase in profits 
      if (monthlyChange > greatestIncrease.Amount) {
          greatestIncrease.Date = record.Date;
          greatestIncrease.Amount = monthlyChange;
      }

      // Check for lowest decrease in profits 
      if (monthlyChange < greatestDecrease.Amount) {
          greatestDecrease.Date = record.Date;
          greatestDecrease.Amount = monthlyChange;
      }

      previousMonthValue = record["Profit/Losses"];
  }
});

// command to calculate the average change per month and display it
let averageChange = totalChange / (totalMonths - 1);

// console log for the results commands to be displayed in the terminal
console.log(`Total Months: ${totalMonths}`);
console.log(`Total: $${totalProfitLosses}`);
console.log(`Average Change: ${averageChange.toFixed(2)}`);
console.log(`Greatest Increase in Profits/Losses: ${greatestIncrease.Date} ($${greatestIncrease.Amount})`);
console.log(`Greatest Decrease in Profits/Losses: ${greatestDecrease.Date} ($${greatestDecrease.Amount})`);

// ---The End---