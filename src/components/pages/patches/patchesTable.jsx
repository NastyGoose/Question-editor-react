import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const PatchesTable = ({ classes, data }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Имя</TableCell>
          <TableCell align="right">Количество тестов</TableCell>
          <TableCell align="right">Дата создания</TableCell>
          <TableCell align="right">Дата выпуска</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(item => (
          <TableRow key={item._id}>
            <TableCell component="th" scope="row">
              <Link to={`patches/${item._id}`}>{item.name}</Link>
            </TableCell>
            <TableCell align="right">{item.tests.length}</TableCell>
            <TableCell align="right">{item.dateCreation}</TableCell>
            <TableCell align="right">
              {item.dateRelease ? item.dateRelease : 'Ещё не выпущен'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles(styles)(PatchesTable);
