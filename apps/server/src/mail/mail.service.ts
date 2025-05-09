import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

@Injectable()
export class MailService {
  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `${process.env.RESET_PASSWORD_URL}?email=${to}&token=${token}`
    await resend.emails.send({
      from: `${process.env.PROJECT_NAME} <noreply@${process.env.RESEND_DOMAIN}>`,
      to,
      subject: 'Reset password',
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Hello!</h2>
          <p>You requested to reset your password. Click the link below to continue:</p>
          <p>
            <a href="${resetLink}" style="color: #1a73e8; text-decoration: none;">
              Reset your password
            </a>
          </p>
          <p>If you did not make this request, you can safely ignore this email.</p>

          <hr style="margin: 2em 0;">

          <h2>你好！</h2>
          <p>你请求重置密码，请点击下方链接继续操作：</p>
          <p>
            <a href="${resetLink}" style="color: #1a73e8; text-decoration: none;">
              重置密码
            </a>
          </p>
          <p>如果这不是你的操作，请忽略此邮件。</p>

          <p style="margin-top: 2em; font-size: 0.9em; color: #888;">
            This is an automated email, please do not reply.
            <br />
            此邮件为系统自动发送，请勿直接回复。
          </p>

          <p style="margin-top: 2em; font-size: 0.9em; color: #888;">
            ${process.env.PROJECT_NAME}
          </p>
        </div>`,
    });
  }
}
