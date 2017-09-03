class TimeFormatter

  class << self
    def sec_to_h_m(seconds)
      Time.at(seconds).utc.strftime("%H:%M:%S")
    end
  end

end
