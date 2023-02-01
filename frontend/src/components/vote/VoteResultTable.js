import { useEffect, useState } from "react";
import VoteResultList from "./VoteResultList";
import { CountVote } from "../../api/ApiHandler";
const VoteResultTable = (props) => {
  const [votedData, setVotedData] = useState([]);
  useEffect(() => {
    CountVote().then((data) => {
      setVotedData(data);
    });
  }, []);

  //filtering data according to category
  const filterdVoteData = votedData.filter((item) => {
    if (props.category === item.category) return item;
    else return null;
  });

  return (
    <div className="result-item">
      <span>{props.category}</span>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {filterdVoteData.map((item) => (
            <VoteResultList
              key={item.id}
              name={item.name}
              category={item.category}
              candidate={item.candidate}
              votes={item.votes}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoteResultTable;
