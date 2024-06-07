import React from 'react';

const TableComponent = ({ headers, rows }) => {
  const numColumns = headers.length;
  const columnWidth = `${(100 / numColumns)}%`; // Calculate based on fixed width

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse' as 'collapse',
  };

  const headStyles = {
    width: '100%',
    borderCollapse: 'collapse' as 'collapse',
    borderBottom: "none"
  };

  const cellStyles = {
    padding: '16px',
  };

  const headerStyles = {
    ...cellStyles,
    textAlign: 'left' as 'left',
    borderBottom: 'none',
  };

  const columnStyles = {
    width: columnWidth,
  };

  return (
    <table style={tableStyles}>
      <thead style={headStyles}>
        <tr>
          {headers.map((header, index) => (
            <th key={index} style={{ ...headerStyles, ...columnStyles }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ ...cellStyles, ...columnStyles }} dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;