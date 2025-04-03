from flask import Flask, render_template, url_for

app = Flask(__name__, static_folder="static")

# ホームページのルート
@app.route('/')
def index():
    return render_template('index.html')

# サービスページのルート
@app.route('/services')
def services():
    return render_template('services.html')

# その他のルートを追加することもできます
# 例: 問い合わせページ
# @app.route('/contact')
# def contact():
#     return render_template('contact.html')  # このテンプレートはまだ作成されていません

# # エラーハンドリング - 404ページ
# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404  # このテンプレートはまだ作成されていません

if __name__ == '__main__':
    app.run(debug=True)