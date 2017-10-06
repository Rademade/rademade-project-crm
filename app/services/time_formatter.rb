class TimeFormatter

  class << self
    def sec_to_h_m(seconds)
      [seconds / 3600, seconds / 60 % 60, seconds % 60].map { |t| t.to_s.rjust(2,'0') }.join(':')
    end
  end

end
