function RecentAnalysis({ farms }) {

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.08)",
        marginTop: "30px"
      }}
    >
      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        📋 Recent Farm Analyses
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th>Crop</th>
            <th>Location</th>
            <th>Health</th>
            <th>Profit</th>
            <th>Market</th>
          </tr>
        </thead>

        <tbody>

          {farms
            .slice()
            .reverse()
            .slice(0,5)
            .map((farm) => (

            <tr key={farm._id}>

              <td>{farm.crop}</td>

              <td>{farm.location}</td>

              <td>{farm.health_score}</td>

              <td>
                ₹{farm.expected_profit}
              </td>

              <td>
                {farm.recommended_market}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentAnalysis;