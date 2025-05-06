const averagePassingScore = scores =>
    Number((
      scores
        .map(s => s.marks)
        .filter(m => m >= 40)
        .reduce((sum, m, _, arr) => sum + m / arr.length, 0)
    ).toFixed(1));
    console.log(averagePassingScore([
        { name: "A", marks: 35 },
        { name: "B", marks: 65 },
        { name: "C", marks: 85 },
        { name: "D", marks: 42 }
      ]));
       