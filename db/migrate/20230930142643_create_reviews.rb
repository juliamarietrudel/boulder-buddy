class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      t.string :user
      t.references :gym, null: false, foreign_key: true

      t.timestamps
    end
  end
end
