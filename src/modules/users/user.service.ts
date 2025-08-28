import { injectable } from 'tsyringe';
import { pool } from '../../db';

@injectable()
export class UserService {
  async findAll() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  async findById(id: number) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  async create(name: string, email: string) {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  }

  async update(id: number, name: string, email: string) {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  }

  async delete(id: number) {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
}
