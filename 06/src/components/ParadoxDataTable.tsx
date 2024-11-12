import React from "react";

export function ParadoxDataTable() {
  return (
    <div className="w-4/5 mx-auto overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Time (seconds)</th>
            <th>Achilles Position (meters)</th>
            <th>Tortoise Position (meters)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>100</td>
            <td>110</td>
          </tr>
          <tr>
            <td>1.1</td>
            <td>110</td>
            <td>111</td>
          </tr>
          <tr>
            <td>1.11</td>
            <td>111</td>
            <td>111.1</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}